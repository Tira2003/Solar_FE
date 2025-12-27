import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { format, parseISO } from "date-fns"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { useEditSolarUnitMutation } from "@/lib/redux/query"
import { useParams, useNavigate } from "react-router"
import { useGetAllUsersQuery } from "@/lib/redux/query"
import { Save, RotateCcw, CheckCircle2, AlertCircle } from "lucide-react"
import { useState } from "react"

const formSchema = z.object({
    serialNumber: z.string().min(1, { message: "Serial number is required" }),
    installationDate: z.date({ required_error: "Installation date is required" }),
    capacity: z.number().positive({ message: "Capacity must be a positive number" }),
    status: z.enum(["ACTIVE", "INACTIVE", "MAINTENANCE"], { message: "Please select a valid status" }),
    userId: z.string().min(1, { message: "User ID is required" }),
});

export function EditSolarUnitForm({ solarUnit }) {
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const navigate = useNavigate();
    
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            serialNumber: solarUnit.serialNumber,
            installationDate: solarUnit.installationDate ? parseISO(solarUnit.installationDate.split('T')[0]) : undefined,
            capacity: solarUnit.capacity,
            status: solarUnit.status,
            userId: solarUnit.userId,
        },
    })

    const { id } = useParams();

    const [editSolarUnit, { isLoading: isEditingSolarUnit }] = useEditSolarUnitMutation();

    const { data: users } = useGetAllUsersQuery();

    async function onSubmit(values) {
        try {
            setSubmitStatus(null);
            // Format date to ISO string for API
            const formattedValues = {
                ...values,
                installationDate: format(values.installationDate, "yyyy-MM-dd"),
            };
            await editSolarUnit({ id, data: formattedValues }).unwrap();
            setSubmitStatus('success');
            
            // Navigate back after a short delay
            setTimeout(() => {
                navigate(-1);
            }, 1500);
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        }
    }

    const handleReset = () => {
        form.reset();
        setSubmitStatus(null);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Status Messages */}
                {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm font-medium">Solar unit updated successfully! Redirecting...</span>
                    </div>
                )}
                
                {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm font-medium">Failed to update solar unit. Please try again.</span>
                    </div>
                )}

                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Serial Number */}
                    <FormField
                        control={form.control}
                        name="serialNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-medium">
                                    Serial Number
                                </FormLabel>
                                <FormControl>
                                    <Input 
                                        placeholder="Enter serial number" 
                                        className="h-11 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Capacity */}
                    <FormField
                        control={form.control}
                        name="capacity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-medium">
                                    Capacity (kW)
                                </FormLabel>
                                <FormControl>
                                    <Input 
                                        type="number" 
                                        placeholder="Enter capacity in kW" 
                                        className="h-11 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                                        {...field} 
                                        onChange={(e) => field.onChange(parseFloat(e.target.value))} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Installation Date */}
                    <FormField
                        control={form.control}
                        name="installationDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel className="text-gray-700 font-medium">
                                    Installation Date
                                </FormLabel>
                                <FormControl>
                                    <DatePicker
                                        date={field.value}
                                        onDateChange={field.onChange}
                                        placeholder="Select installation date"
                                        className="h-11"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Status */}
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-medium">
                                    Status
                                </FormLabel>
                                <FormControl>
                                    <Select value={field.value || ""} onValueChange={field.onChange}>
                                        <SelectTrigger className="h-11 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500/20">
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ACTIVE">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                                    Active
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="INACTIVE">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                                    Inactive
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="MAINTENANCE">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                                                    Maintenance
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Assigned User - Full Width */}
                <FormField
                    control={form.control}
                    name="userId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-gray-700 font-medium">
                                Assigned User
                            </FormLabel>
                            <FormControl>
                                <Select value={field.value || ""} onValueChange={field.onChange}>
                                    <SelectTrigger className="h-11 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500/20">
                                        <SelectValue placeholder="Select a user to assign" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {users?.map((user) => (
                                            <SelectItem key={user._id} value={user._id}>
                                                {user.email}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Divider */}
                <div className="border-t border-gray-100 pt-6"></div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-4">
                    <Button 
                        type="button" 
                        variant="outline"
                        onClick={handleReset}
                        className="h-11 px-6 border-gray-200 text-gray-600 hover:bg-gray-50"
                    >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Reset
                    </Button>
                    
                    <Button 
                        type="submit" 
                        disabled={isEditingSolarUnit}
                        className="h-11 px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25"
                    >
                        {isEditingSolarUnit ? (
                            <>
                                <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                Saving...
                            </>
                        ) : (
                            <>
                                <Save className="h-4 w-4 mr-2" />
                                Save Changes
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
}