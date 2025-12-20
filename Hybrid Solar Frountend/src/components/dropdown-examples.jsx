import React from 'react';
import Dropdown, { 
  DropdownButton, 
  DropdownItem, 
  DropdownDivider, 
  DropdownHeader 
} from './dropdown';
import { User, Settings, LogOut, Bell, Mail, HelpCircle } from 'lucide-react';

// Example 1: User Profile Dropdown
export const UserProfileDropdown = () => {
  return (
    <Dropdown
      trigger={
        <DropdownButton variant="secondary">
          My Account
        </DropdownButton>
      }
      align="right"
    >
      <DropdownHeader>Account</DropdownHeader>
      <DropdownItem icon={User} onClick={() => console.log('Profile')}>
        Profile
      </DropdownItem>
      <DropdownItem icon={Settings} onClick={() => console.log('Settings')}>
        Settings
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={LogOut} variant="danger" onClick={() => console.log('Logout')}>
        Logout
      </DropdownItem>
    </Dropdown>
  );
};

// Example 2: Notifications Dropdown
export const NotificationsDropdown = () => {
  return (
    <Dropdown
      trigger={
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      }
      align="right"
      width="w-80"
    >
      <DropdownHeader>Notifications</DropdownHeader>
      <DropdownItem icon={Mail}>
        New invoice available
      </DropdownItem>
      <DropdownItem icon={Bell}>
        System maintenance scheduled
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem>
        View all notifications
      </DropdownItem>
    </Dropdown>
  );
};

// Example 3: Actions Dropdown
export const ActionsDropdown = () => {
  return (
    <Dropdown
      trigger={
        <DropdownButton variant="primary">
          Actions
        </DropdownButton>
      }
    >
      <DropdownItem onClick={() => console.log('Edit')}>
        Edit
      </DropdownItem>
      <DropdownItem onClick={() => console.log('Duplicate')}>
        Duplicate
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem variant="danger" onClick={() => console.log('Delete')}>
        Delete
      </DropdownItem>
    </Dropdown>
  );
};

// Example 4: Help Dropdown
export const HelpDropdown = () => {
  return (
    <Dropdown
      trigger={
        <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
          <HelpCircle className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Help</span>
        </button>
      }
      align="right"
    >
      <DropdownItem>Documentation</DropdownItem>
      <DropdownItem>Support</DropdownItem>
      <DropdownItem>Keyboard Shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Report a Bug</DropdownItem>
    </Dropdown>
  );
};
