<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PackagePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any packages.
     *
     * @param  User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return true; // Allow all users to view packages
    }

    /**
     * Determine whether the user can view the package.
     *
     * @param  User  $user
     * @param  Package  $package
     * @return mixed
     */
    public function view(User $user, Package $package)
    {
        return true; // Allow all users to view a specific package
    }

    /**
     * Determine whether the user can create packages.
     *
     * @param  User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->role === 'admin'; // Only admin can create packages
    }

    /**
     * Determine whether the user can update the package.
     *
     * @param  User  $user
     * @param  Package  $package
     * @return mixed
     */
    public function update(User $user, Package $package)
    {
        return $user->role === 'admin'; // Only admin can update packages
    }

    /**
     * Determine whether the user can delete the package.
     *
     * @param  User  $user
     * @param  Package  $package
     * @return mixed
     */
    public function delete(User $user, Package $package)
    {
        return $user->role === 'admin'; // Only admin can delete packages
    }
}
