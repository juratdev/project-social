<script setup>
  import {
    LightningBoltIcon,
    CogIcon,
    UserAddIcon,
    EmojiHappyIcon,
    PhotographIcon,
    CameraIcon,
    PaperClipIcon,
    HashtagIcon,
    AtSymbolIcon,
    ChevronDownIcon
  } from "@heroicons/vue/outline"
  import MdiTwitterCircle from "../assets/img/MdiTwitterCircle.vue";
  import FaTwitterSquare from "../assets/img/FaTwitterSquare.vue";
  import PhGitlabLogoSimpleFill from "../assets/img/PhGitlabLogoSimpleFill.vue";
  import FlatColorIconsLike from "../assets/img/FlatColorIconsLike.vue";
  import UilComment from "../assets/img/UilComment.vue";
  import PhShareLight from "../assets/img/PhShareLight.vue";
  import PhShareDuotone from "../assets/img/PhShareDuotone.vue";
  import PrimeSend from "../assets/img/PrimeSend.vue";
</script>

<template>
  <div class="px-6 pt-6">
    <div class="container flex gap-8 mx-auto max-w-screen-2xl">
      <!-- LEFT BAR -->
      <div class="hidden w-72 h-min 2xl:block">
        <div class="px-6 py-4 bg-white rounded-xl">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 overflow-hidden rounded-full">
                <img class="object-cover w-full h-auto" src="../assets/img/avatar.jpg" alt="avatar">
              </div>
              <div class="flex flex-col space-y-1">
                <span class="text-sm font-medium">Enes Dogan</span>
                <span class="text-xs text-gray-400">Product Manager</span>
              </div>
            </div>
            <div>
              <CogIcon class="w-6 h-6 text-gray-500" />
            </div>
          </div>
          <div class="w-full h-0.5 bg-gray-100 my-6"></div>
          <div class="space-y-4">
            <h1 class="text-xs font-medium text-gray-400 -tracking-wide">YOUR PAGES</h1>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div>
                  <MdiTwitterCircle class="w-12 h-12 text-blue-500" />
                </div>
                <div class="flex flex-col space-y-1">
                  <span class="text-sm font-medium">Twitter</span>
                  <span class="text-xs text-gray-400">Social Media Platform</span>
                </div>
              </div>
              <div class="flex items-center justify-center w-6 h-6 text-xs text-white bg-red-500 rounded-full">2</div>
            </div>
            <div class="font-medium text-blue-500 cursor-pointer">View All</div>
          </div>
          <div class="space-y-4 mt-6">
            <h1 class="text-base text-gray-400 -tracking-wide">YOUR PROJECTS</h1>
            <div v-for:="i in 2" class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 flex justify-center items-center overflow-hidden rounded-full bg-orange-600">
                  <PhGitlabLogoSimpleFill class="w-7 h-7 text-white" />
                </div>
                <div class="flex flex-col space-y-1">
                  <span class="text-sm font-medium">Github</span>
                  <span class="text-xs text-gray-400">Coding Platform</span>
                </div>
              </div>
              <div class="flex items-center justify-center w-6 h-6 text-xs text-white bg-red-500 rounded-full">2</div>
            </div>
            <div class="font-medium text-blue-500 cursor-pointer">View All</div>
          </div>
        </div>
      </div>

      <!-- MAIN -->
      <div class="flex-1 h-min">
        <div class="px-6 py-6 bg-white rounded-xl">
          <div class="flex items-center space-x-6">
            <div class="w-12 h-12 overflow-hidden rounded-full">
              <img src="../assets/img/avatar.jpg" alt="avatar">
            </div>
            <div class="relative flex-1">
              <input class="w-full px-6 py-3 rounded-full outline-none bg-gray-50" type="text"
                placeholder="Share something...">
              <span class="absolute transform -translate-x-10 translate-y-1/2">
                <EmojiHappyIcon class="w-6 h-6 text-gray-400" /></span>
            </div>
          </div>
          <div class="w-full h-0.5 bg-gray-100 my-6"></div>
          <div class="flex justify-between">
            <div class="flex space-x-6">
              <div class="flex space-x-2 cursor-pointer">
                <span>
                  <PhotographIcon class="w-6 h-6 text-blue-500" /></span>
                <span>Image</span>
              </div>
              <div class="flex space-x-2 cursor-pointer">
                <span>
                  <CameraIcon class="w-6 h-6 text-green-500" /></span>
                <span>Video</span>
              </div>
              <div class="flex space-x-2 cursor-pointer">
                <span>
                  <PaperClipIcon class="w-6 h-6 text-amber-500" /></span>
                <span>Attachment</span>
              </div>
              <div class="flex space-x-2">
                <span>
                  <HashtagIcon class="w-6 h-6 text-red-500" /></span>
                <span>Hashtag</span>
              </div>
              <div class="flex space-x-2 cursor-pointer">
                <span>
                  <AtSymbolIcon class="w-6 h-6 text-gray-500" /></span>
                <span>Mention</span>
              </div>
            </div>
            <div class="flex items-center space-x-2 text-gray-400 cursor-pointer">
              <span>Public</span>
              <span>
                <ChevronDownIcon class="w-4 h-4" /></span>
            </div>
          </div>
        </div>
        <div class="px-6 py-6 flex justify-end space-x-2">
          <span>Soft by:</span>
          <span class="flex items-center text-blue-500">Top
            <ChevronDownIcon class="w-4 h-4 ml-2 text-blue-500" /></span>
        </div>
        <div class="px-6 py-6 bg-white rounded-xl">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 overflow-hidden rounded-full">
              <img class="object-cover w-full h-auto" src="../assets/img/avatar.jpg" alt="avatar">
            </div>
            <div class="flex flex-col space-y-1">
              <span class="text-sm font-medium">Enes Dogan</span>
              <span class="text-xs text-gray-400">2 hours ago</span>
            </div>
          </div>
          <div>
            <p class="mt-6 text-2xl">Was great meeting up with Enes Dogan and Dave Bishop at the breakfast talk!</p>
            <span class="text-blue-500 text-lg font-medium">#breakfast</span>
          </div>
          <div class="w-full h-96 overflow-hidden my-6">
            <img class="object-cover w-full h-auto rounded-md" src="../assets/img/breakfast.jpg" alt="">
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-3">
              <span class="flex items-center">
                <FlatColorIconsLike class="w-9 h-8" />45</span>
              <span class="flex items-center">
                <UilComment class="w-9 h-8 text-gray-500" />16</span>
              <span class="flex items-center">
                <PhShareDuotone class="w-9 h-8 text-gray-500" /></span>
            </div>
            <div>
              <PrimeSend class="w-9 h-8 text-gray-500" />
            </div>
          </div>

        </div>
      </div>

      <!-- RIGHT BAR -->
      <div class="hidden space-y-6 w-72 h-min xl:block">
        <div class="px-6 py-4 space-y-6 bg-white rounded-xl">
          <h1 class="font-medium">Suggestions for you</h1>
          <div v-for:="i in 3" class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 overflow-hidden rounded-full">
                <img class="object-cover w-full h-auto" src="../assets/img/avatar.jpg" alt="avatar">
              </div>
              <div class="flex flex-col space-y-1">
                <span class="text-sm font-medium">Enes Dogan</span>
                <span class="text-xs text-gray-400">Product Manager</span>
              </div>
            </div>
            <div class="p-2 border rounded-full">
              <LightningBoltIcon class="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <div class="font-medium text-center text-blue-500 cursor-pointer">Show more</div>
        </div>
        <div class="px-6 py-4 space-y-6 bg-white rounded-xl">
          <h1 class="font-medium">Popular pages and projects</h1>
          <div v-for:="i in 3" class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div>
                <FaTwitterSquare class="w-10 h-10 text-blue-500" />
              </div>
              <div class="flex flex-col space-y-1">
                <span class="text-sm font-medium">Twitter</span>
                <span class="text-xs text-gray-400">Technology company</span>
              </div>
            </div>
            <div class="p-2 border rounded-full">
              <UserAddIcon class="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <div class="font-medium text-center text-blue-500 cursor-pointer">View All Recommendations</div>
        </div>
      </div>
    </div>
  </div>
</template>