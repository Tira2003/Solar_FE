import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api`;

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, prepareHeaders: async (headers) => {
    const clerk = window.Clerk;
    if (clerk) {
      const token = await clerk.session.getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    }
    return headers;
  } }),
  endpoints: (build) => ({
    getEnergyGenerationRecordsBySolarUnit: build.query({
      query: ({id, groupBy, limit}) => `/energy-generation-records/solar-unit/${id}?groupBy=${groupBy}&limit=${limit}`,
    }),
    getSolarUnitForUser: build.query({
      query: () => `/solar-units/me`,
    }),
    getSolarUnits: build.query({
      query: () => `/solar-units`,
    }),
    getSolarUnitById: build.query({
      query: (id) => `/solar-units/${id}`,
    }),
    createSolarUnit: build.mutation({
      query: (data) => ({
        url: `/solar-units`,
        method: "POST",
        body: data,
      }),
    }),
    editSolarUnit: build.mutation({
      query: ({id, data}) => ({
        url: `/solar-units/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    getAllUsers: build.query({
      query: () => `/users`,
    }),
    getWeatherForSolarUnit: build.query({
      query: () => `/weather/solar-unit`,
    }),
    // Invoice endpoints
    getInvoices: build.query({
      query: () => `/invoices`,
    }),
    getInvoiceById: build.query({
      query: (id) => `/invoices/${id}`,
    }),
    // Payment endpoints
    createPaymentSession: build.mutation({
      query: (data) => ({
        url: `/payments/create-checkout-session`,
        method: "POST",
        body: data,
      }),
    }),
    getSessionStatus: build.query({
      query: (sessionId) => `/payments/session-status?session_id=${sessionId}`,
    }),
    // Anomaly endpoints
    getAnomalies: build.query({
      query: ({ type, severity, status } = {}) => {
        const params = new URLSearchParams();
        if (type) params.append('type', type);
        if (severity) params.append('severity', severity);
        if (status) params.append('status', status);
        const queryString = params.toString();
        return `/anomalies${queryString ? `?${queryString}` : ''}`;
      },
      providesTags: ['Anomalies'],
    }),
    getAnomalyStats: build.query({
      query: () => `/anomalies/stats`,
      providesTags: ['AnomalyStats'],
    }),
    getAnomaliesAdmin: build.query({
      query: ({ type, severity, status } = {}) => {
        const params = new URLSearchParams();
        if (type) params.append('type', type);
        if (severity) params.append('severity', severity);
        if (status) params.append('status', status);
        const queryString = params.toString();
        return `/anomalies/admin/all${queryString ? `?${queryString}` : ''}`;
      },
      providesTags: ['Anomalies'],
    }),
    acknowledgeAnomaly: build.mutation({
      query: (id) => ({
        url: `/anomalies/${id}/acknowledge`,
        method: 'PUT',
      }),
      invalidatesTags: ['Anomalies', 'AnomalyStats'],
    }),
    resolveAnomaly: build.mutation({
      query: ({ id, notes }) => ({
        url: `/anomalies/${id}/resolve`,
        method: 'PUT',
        body: { notes },
      }),
      invalidatesTags: ['Anomalies', 'AnomalyStats'],
    }),
    // Manual trigger endpoints for testing
    triggerSync: build.mutation({
      query: () => ({
        url: `/anomalies/trigger/sync`,
        method: 'POST',
      }),
    }),
    triggerDetect: build.mutation({
      query: () => ({
        url: `/anomalies/trigger/detect`,
        method: 'POST',
      }),
      invalidatesTags: ['Anomalies', 'AnomalyStats'],
    }),
    triggerSyncAndDetect: build.mutation({
      query: () => ({
        url: `/anomalies/trigger/sync-and-detect`,
        method: 'POST',
      }),
      invalidatesTags: ['Anomalies', 'AnomalyStats'],
    }),
    // Admin Dashboard endpoints
    getAdminDashboardStats: build.query({
      query: () => `/admin/dashboard-stats`,
      providesTags: ['AdminStats'],
    }),
    getAdminEnergyGeneration: build.query({
      query: ({ groupBy = 'day', limit = 7 } = {}) => 
        `/admin/energy-generation?groupBy=${groupBy}&limit=${limit}`,
      providesTags: ['AdminEnergy'],
    }),
    getAdminPendingInvoices: build.query({
      query: ({ limit = 10 } = {}) => `/admin/pending-invoices?limit=${limit}`,
      providesTags: ['AdminInvoices'],
    }),
    getAdminCriticalAnomalies: build.query({
      query: ({ limit = 10 } = {}) => `/admin/critical-anomalies?limit=${limit}`,
      providesTags: ['AdminAnomalies'],
    }),
  }),
});

export const { 
  useGetAllUsersQuery, 
  useGetEnergyGenerationRecordsBySolarUnitQuery, 
  useGetSolarUnitForUserQuery, 
  useGetSolarUnitsQuery, 
  useGetSolarUnitByIdQuery, 
  useCreateSolarUnitMutation, 
  useEditSolarUnitMutation,
  useGetWeatherForSolarUnitQuery,
  useGetInvoicesQuery,
  useGetInvoiceByIdQuery,
  useCreatePaymentSessionMutation,
  useGetSessionStatusQuery,
  // Anomaly hooks
  useGetAnomaliesQuery,
  useGetAnomalyStatsQuery,
  useGetAnomaliesAdminQuery,
  useAcknowledgeAnomalyMutation,
  useResolveAnomalyMutation,
  // Trigger hooks
  useTriggerSyncMutation,
  useTriggerDetectMutation,
  useTriggerSyncAndDetectMutation,
  // Admin Dashboard hooks
  useGetAdminDashboardStatsQuery,
  useGetAdminEnergyGenerationQuery,
  useGetAdminPendingInvoicesQuery,
  useGetAdminCriticalAnomaliesQuery,
} = api;