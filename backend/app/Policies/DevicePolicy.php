<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Device;
use Illuminate\Auth\Access\HandlesAuthorization;

class DevicePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can update the device.
     *
     * @param  User  $user
     * @param  Device  $device
     * @return bool
     */
    public function update(User $user, Device $device)
    {
        // Allow admin to update any device
        if ($user->role === 'admin') {
            return true;
        }

        // You can add additional checks for other roles here if necessary
        return false;
    }

    /**
     * Determine whether the user can delete the device.
     *
     * @param  User  $user
     * @param  Device  $device
     * @return bool
     */
    public function delete(User $user, Device $device)
    {
        // Allow admin to delete any device
        return $user->role === 'admin';
    }
}
