<script setup>
  import {
    CogIcon,
    ChevronDownIcon,
    SearchIcon,
    HomeIcon,
    UsersIcon,
    ChatIcon,
    BellIcon
  } from "@heroicons/vue/outline";
</script>

<template>
  <nav class="bg-white">
    <div class="container flex items-center justify-between py-6 mx-auto max-w-screen-2xl">
      <div class="flex items-center space-x-4">
        <span>
          <CogIcon class="w-10 h-10 text-blue-500" />
        </span>
        <div class="relative">
          <span class="absolute transform translate-x-4 translate-y-1/2">
            <SearchIcon class="w-6 h-6 text-gray-400" /></span>
          <input
            class="w-64 rounded-full pl-12 py-2.5 border-2 outline-none focus:border-blue-500 placeholder:text-gray-400"
            type="text" placeholder="Search">
        </div>
      </div>
      <div>
        <ul class="flex items-center space-x-8">
          <li class="flex items-center space-x-3 cursor-pointer">
            <span>
              <HomeIcon class="w-6 h-6 text-blue-500" /></span>
            <span>Homepage</span>
          </li>
          <li class="flex items-center space-x-3 cursor-pointer">
            <span>
              <UsersIcon class="w-6 h-6 text-blue-500" /></span>
            <span>Connections</span>
          </li>
          <li class="flex items-center space-x-3 cursor-pointer">
            <span>
              <ChatIcon class="w-6 h-6 text-blue-500" /></span>
            <span>Messages</span>
          </li>
          <li class="flex items-center space-x-3 cursor-pointer">
            <span>
              <BellIcon class="w-6 h-6 text-blue-500" /></span>
            <span>Notifications</span>
          </li>
          <li class="flex items-center space-x-3 cursor-pointer">
            <span>
              <CogIcon class="w-6 h-6 text-blue-500" /></span>
            <span>Tools</span>
          </li>
        </ul>
      </div>
      <div class="flex items-center justify-between space-x-4 cursor-pointer">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 overflow-hidden rounded-full">
            <img class="object-cover w-full h-auto" src="../assets/img/avatar.jpg" alt="avatar">
          </div>
          <span>Ersad Basbag</span>
        </div>
        <div>
          <ChevronDownIcon class="w-4 h-4" />
        </div>
      </div>
    </div>
  </nav>
</template>