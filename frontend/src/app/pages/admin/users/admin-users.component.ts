import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admin-users',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex h-screen w-full bg-luxe-bg dark:bg-background-dark text-luxe-text antialiased overflow-hidden font-display">
        <!-- Sidebar -->
        <aside class="w-64 flex-shrink-0 flex flex-col bg-white border-r border-[#f0e6e9] h-full z-20 shadow-soft hidden md:flex">
            <div class="h-20 flex items-center px-8">
                <div class="flex items-center gap-3">
                    <div class="text-2xl text-luxe-text">
                        <span class="material-symbols-outlined text-4xl">spa</span>
                    </div>
                    <h1 class="text-xl font-serif font-bold tracking-tight text-luxe-text">Luxe Nails</h1>
                </div>
            </div>
            
            <nav class="flex-1 flex flex-col gap-2 px-4 py-6 overflow-y-auto">
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/dashboard">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
                    <span class="text-sm font-medium">Dashboard</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/bookings">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">calendar_month</span>
                    <span class="text-sm font-medium">Bookings</span>
                </a>
                <!-- Active Link -->
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-[#FFDDE5] text-luxe-text transition-colors group" href="/admin/users">
                    <span class="material-symbols-outlined text-primary group-hover:text-primary transition-colors">group</span>
                    <span class="text-sm font-semibold">Users</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/services">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">content_cut</span>
                    <span class="text-sm font-medium">Services</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/gallery">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">article</span>
                    <span class="text-sm font-medium">Gallery</span>
                </a>
            </nav>
            
            <div class="p-4 border-t border-[#f0e6e9]">
                <button class="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-luxe-text-muted hover:bg-gray-50 transition-colors">
                    <span class="material-symbols-outlined">logout</span>
                    <span class="text-sm font-medium">Log out</span>
                </button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 flex flex-col h-full overflow-hidden bg-luxe-bg dark:bg-background-dark relative">
            <!-- Header Section -->
            <header class="flex-none px-8 py-8 md:px-12 md:py-10">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 class="font-serif text-4xl font-bold text-luxe-text dark:text-white mb-2">User Management</h1>
                        <p class="text-luxe-text-secondary text-base">Manage your salon staff access and clientele.</p>
                    </div>
                    <button class="bg-primary hover:bg-[#d01140] text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-primary/20 flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95">
                        <span class="material-symbols-outlined" style="font-size: 20px;">add</span>
                        <span>Add New Worker</span>
                    </button>
                </div>
            </header>

            <!-- Tabs and Search -->
            <div class="flex-none px-8 md:px-12 pb-6">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center border-b border-[#e7cfd5] dark:border-white/10 gap-4">
                    <!-- Tabs -->
                    <div class="flex gap-8">
                        <button class="pb-4 px-2 border-b-[3px] border-primary text-luxe-text dark:text-white font-serif font-semibold text-lg">
                            Workers
                        </button>
                        <button class="pb-4 px-2 border-b-[3px] border-transparent text-luxe-text-secondary hover:text-primary transition-colors font-serif font-medium text-lg">
                            Clients
                        </button>
                    </div>
                    <!-- Search -->
                    <div class="relative w-full md:w-80 mb-2">
                        <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-luxe-text-secondary" style="font-size: 20px;">search</span>
                        <input class="w-full bg-white dark:bg-[#2a141a] border-none rounded-2xl pl-11 pr-4 py-3 text-sm text-luxe-text shadow-soft focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-luxe-text-secondary/60" placeholder="Search workers..." type="text"/>
                    </div>
                </div>
            </div>

            <!-- Scrollable Content Grid -->
            <div class="flex-1 overflow-y-auto px-8 md:px-12 pb-12">
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <!-- Worker Card 1 -->
                        <div class="bg-white dark:bg-[#2a141a] p-6 rounded-[20px] shadow-card hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10 flex flex-col items-center text-center relative">
                            <div class="absolute top-4 right-4">
                                <span class="material-symbols-outlined text-green-500 bg-green-50 dark:bg-green-900/20 p-1 rounded-full text-xs" title="Active">check_circle</span>
                            </div>
                            <div class="w-24 h-24 rounded-full bg-cover bg-center mb-4 shadow-md ring-4 ring-luxe-primary-light dark:ring-primary/10" data-alt="Portrait of Sophia Miller, Nail Art Expert" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOP2LjYwwqw51Lu8c_7ZIx6fQhLnjua-foKIRivMO-xGLb6h0hmeLUot9cOU2k5cZe4lIAmue9kCsy5v4qlqBa6mFzP3LfySGo2kTr1hvOLbhGb7sf18-agbs8O3YNL_8in9f9gwp_6aTkrbfxVwKZMk36CH2fwfTXGM-6pZjhDE5lwoloFV2YRIfUv8YSQcjZb3wsmc0R-dbZfj0w0EIsJIBx6cPjnJYTJYJOoqbRoGgNIGj0wmggHXrXKA4RZZJy1ZVb-k0fC9gO')"></div>
                            <h3 class="font-serif text-xl font-bold text-luxe-text dark:text-white mb-1">Sophia Miller</h3>
                            <span class="inline-flex items-center px-3 py-1 rounded-full bg-luxe-primary-light dark:bg-primary/20 text-primary text-xs font-semibold mb-3">
                                Nail Art Expert
                            </span>
                            <div class="flex items-center gap-1 mb-4">
                                <span class="material-symbols-outlined text-yellow-400 filled" style="font-variation-settings: 'FILL' 1; font-size: 18px;">star</span>
                                <span class="text-sm font-bold text-luxe-text dark:text-white">4.9</span>
                                <span class="text-xs text-luxe-text-secondary ml-1">(124 reviews)</span>
                            </div>
                            <div class="w-full border-t border-gray-100 dark:border-white/5 my-2"></div>
                            <div class="w-full py-2 flex flex-col gap-2 mb-4">
                                <p class="text-xs text-luxe-text-secondary flex items-center justify-center gap-1">
                                    <span class="material-symbols-outlined" style="font-size: 14px;">mail</span>
                                    sophia.m@luxenail.com
                                </p>
                            </div>
                            <div class="mt-auto w-full flex items-center justify-between gap-3">
                                <div class="flex items-center gap-2">
                                    <span class="text-xs font-medium text-luxe-text-secondary">Active</span>
                                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input checked="" class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 ease-in-out" id="toggle1" name="toggle" type="checkbox"/>
                                        <label class="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer transition-colors duration-300" for="toggle1"></label>
                                    </div>
                                </div>
                                <button class="bg-luxe-primary-light hover:bg-primary hover:text-white text-primary rounded-xl px-4 py-2 text-xs font-bold transition-colors">
                                    Edit Profile
                                </button>
                            </div>
                        </div>

                        <!-- Worker Card 2 -->
                        <div class="bg-white dark:bg-[#2a141a] p-6 rounded-[20px] shadow-card hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10 flex flex-col items-center text-center relative">
                            <div class="absolute top-4 right-4">
                                <span class="material-symbols-outlined text-green-500 bg-green-50 dark:bg-green-900/20 p-1 rounded-full text-xs" title="Active">check_circle</span>
                            </div>
                            <div class="w-24 h-24 rounded-full bg-cover bg-center mb-4 shadow-md ring-4 ring-luxe-primary-light dark:ring-primary/10" data-alt="Portrait of Chloe Davis, Gel Specialist" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDm_moNgYdiNHNky2puAVySjeDOjqi8SrzNhrX2-O_XpTcDxlemiXi9x0NydJ7bqq9XFcoaqzq-rrHUuz3MZiRhmZ6NPKQi2KccAlVm5w3huabize0VNTKWX3JoG4fMx3q8Hb3PI5C12TsrtXmNHNqXJtCTEtru_Fe8eEKkasCHyl1Pf3OiCMktK-wuzzMKLjXhbQjVoMfcOMRXn8NSwoxc7rwTu9KRewS7hvXzdzxGMySKdj3_29TwaPmlKWJMY0-aIeRxk9OnySxN')"></div>
                            <h3 class="font-serif text-xl font-bold text-luxe-text dark:text-white mb-1">Chloe Davis</h3>
                            <span class="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 text-xs font-semibold mb-3">
                                Gel Specialist
                            </span>
                            <div class="flex items-center gap-1 mb-4">
                                <span class="material-symbols-outlined text-yellow-400 filled" style="font-variation-settings: 'FILL' 1; font-size: 18px;">star</span>
                                <span class="text-sm font-bold text-luxe-text dark:text-white">4.7</span>
                                <span class="text-xs text-luxe-text-secondary ml-1">(98 reviews)</span>
                            </div>
                            <div class="w-full border-t border-gray-100 dark:border-white/5 my-2"></div>
                            <div class="w-full py-2 flex flex-col gap-2 mb-4">
                                <p class="text-xs text-luxe-text-secondary flex items-center justify-center gap-1">
                                    <span class="material-symbols-outlined" style="font-size: 14px;">mail</span>
                                    chloe.d@luxenail.com
                                </p>
                            </div>
                            <div class="mt-auto w-full flex items-center justify-between gap-3">
                                <div class="flex items-center gap-2">
                                    <span class="text-xs font-medium text-luxe-text-secondary">Active</span>
                                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input checked="" class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 ease-in-out" id="toggle2" name="toggle" type="checkbox"/>
                                        <label class="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer transition-colors duration-300" for="toggle2"></label>
                                    </div>
                                </div>
                                <button class="bg-luxe-primary-light hover:bg-primary hover:text-white text-primary rounded-xl px-4 py-2 text-xs font-bold transition-colors">
                                    Edit Profile
                                </button>
                            </div>
                        </div>

                        <!-- Worker Card 3 -->
                        <div class="bg-white dark:bg-[#2a141a] p-6 rounded-[20px] shadow-card hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10 flex flex-col items-center text-center relative">
                            <div class="absolute top-4 right-4">
                                <span class="material-symbols-outlined text-gray-400 bg-gray-50 dark:bg-gray-800 p-1 rounded-full text-xs" title="Inactive">do_not_disturb_on</span>
                            </div>
                            <div class="w-24 h-24 rounded-full bg-cover bg-center mb-4 shadow-md ring-4 ring-gray-100 dark:ring-white/5 grayscale" data-alt="Portrait of Elena Gomez, Pedicure Specialist" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2QW0R1Y84Zsvs0_HuHqr8BSwnrifns0vqt-F2g5pQButKLhGtizentue9ub8mwUCA5c7UknBPyqjGOHGSgJoOA93RXg_79r1YLVgUCpszrysW3i3gnZ_o2yiUJPN_hFGRs89w9UgFGotohjGZAxfNHzLgzPJgR6sGNMj2GobSGeGIV1e1Sv-ULHePCMPcMRhuXBCvxmmrdBlw0jZX8GhIzfkbgRnOo66tdveog1BhdQ-j1Cb4epQBHw_XsROWeJVb2p2ErueNLWJZ')"></div>
                            <h3 class="font-serif text-xl font-bold text-gray-500 dark:text-gray-400 mb-1">Elena Gomez</h3>
                            <span class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-semibold mb-3">
                                Pedicure Specialist
                            </span>
                            <div class="flex items-center gap-1 mb-4 opacity-60">
                                <span class="material-symbols-outlined text-yellow-400 filled" style="font-variation-settings: 'FILL' 1; font-size: 18px;">star</span>
                                <span class="text-sm font-bold text-luxe-text dark:text-white">4.9</span>
                                <span class="text-xs text-luxe-text-secondary ml-1">(215 reviews)</span>
                            </div>
                            <div class="w-full border-t border-gray-100 dark:border-white/5 my-2"></div>
                            <div class="w-full py-2 flex flex-col gap-2 mb-4">
                                <p class="text-xs text-luxe-text-secondary flex items-center justify-center gap-1">
                                    <span class="material-symbols-outlined" style="font-size: 14px;">mail</span>
                                    elena.g@luxenail.com
                                </p>
                            </div>
                            <div class="mt-auto w-full flex items-center justify-between gap-3">
                                <div class="flex items-center gap-2">
                                    <span class="text-xs font-medium text-luxe-text-secondary">Inactive</span>
                                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer right-auto left-0 border-gray-300" id="toggle3" name="toggle" type="checkbox"/>
                                        <label class="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer" for="toggle3"></label>
                                    </div>
                                </div>
                                <button class="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl px-4 py-2 text-xs font-bold transition-colors">
                                    Edit Profile
                                </button>
                            </div>
                        </div>

                        <!-- Worker Card 4 -->
                        <div class="bg-white dark:bg-[#2a141a] p-6 rounded-[20px] shadow-card hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10 flex flex-col items-center text-center relative">
                            <div class="absolute top-4 right-4">
                                <span class="material-symbols-outlined text-green-500 bg-green-50 dark:bg-green-900/20 p-1 rounded-full text-xs" title="Active">check_circle</span>
                            </div>
                            <div class="w-24 h-24 rounded-full bg-cover bg-center mb-4 shadow-md ring-4 ring-luxe-primary-light dark:ring-primary/10" data-alt="Portrait of Isabella Ross, Senior Stylist" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWL93jEyWDRQAPSKmjGVHiXyoVTs5JRt1HhGElV2-ZNbKDyFxH2AOaOm7izNu-MoQl5xOcjBM7svcrrpVGs-z9_GzFC59PX_rnMYpmmYrKMgxDqdbHo1raKUFdE5704tavYRIMXWjju4row8VQtXimUt55iSYJAEOZtSewuqfwPSD96kh-2BmITKmpUKhkq4dDK6zW3yoYGU9rH5qTdMZLLaYgA5MMoylYZ4SCCHcan7oSXT-bWr0JFluEXdrfjaCT0qCNCrQ4965o')"></div>
                            <h3 class="font-serif text-xl font-bold text-luxe-text dark:text-white mb-1">Isabella Ross</h3>
                            <span class="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs font-semibold mb-3">
                                Senior Stylist
                            </span>
                            <div class="flex items-center gap-1 mb-4">
                                <span class="material-symbols-outlined text-yellow-400 filled" style="font-variation-settings: 'FILL' 1; font-size: 18px;">star</span>
                                <span class="text-sm font-bold text-luxe-text dark:text-white">4.8</span>
                                <span class="text-xs text-luxe-text-secondary ml-1">(86 reviews)</span>
                            </div>
                            <div class="w-full border-t border-gray-100 dark:border-white/5 my-2"></div>
                            <div class="w-full py-2 flex flex-col gap-2 mb-4">
                                <p class="text-xs text-luxe-text-secondary flex items-center justify-center gap-1">
                                    <span class="material-symbols-outlined" style="font-size: 14px;">mail</span>
                                    isa.ross@luxenail.com
                                </p>
                            </div>
                            <div class="mt-auto w-full flex items-center justify-between gap-3">
                                <div class="flex items-center gap-2">
                                    <span class="text-xs font-medium text-luxe-text-secondary">Active</span>
                                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input checked="" class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 ease-in-out" id="toggle4" name="toggle" type="checkbox"/>
                                        <label class="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer transition-colors duration-300" for="toggle4"></label>
                                    </div>
                                </div>
                                <button class="bg-luxe-primary-light hover:bg-primary hover:text-white text-primary rounded-xl px-4 py-2 text-xs font-bold transition-colors">
                                    Edit Profile
                                </button>
                            </div>
                        </div>

                        <!-- Worker Card 5 -->
                        <div class="bg-white dark:bg-[#2a141a] p-6 rounded-[20px] shadow-card hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10 flex flex-col items-center text-center relative">
                            <div class="absolute top-4 right-4">
                                <span class="material-symbols-outlined text-green-500 bg-green-50 dark:bg-green-900/20 p-1 rounded-full text-xs" title="Active">check_circle</span>
                            </div>
                            <div class="w-24 h-24 rounded-full bg-cover bg-center mb-4 shadow-md ring-4 ring-luxe-primary-light dark:ring-primary/10" data-alt="Portrait of Marcus Chen, Manicure Specialist" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuaSr-oRC1pHgzNGnWV9DYhr9-q43TmBZRuvygDtDH3q7Ej8RsOar3NSUnHbrBpJjI2LgC07T90PbY1JMQsLckuCripNV1_CRwYh98ta61I5ndO0pvgYCOUO3r7Oo1VMVZb_HYKLof92-rkrHpiRReRvVBo53J0_cZPgsxX9oJ5JMoZmB8B6AjLv-y18PNd6Tzr1Kj9N6hGFEsdJXd4_1HQW5SSP9PxrXTde4xttAW3NFifivW-XI2lNuSx5SrnQoyBn1ltpFNu5gR')"></div>
                            <h3 class="font-serif text-xl font-bold text-luxe-text dark:text-white mb-1">Marcus Chen</h3>
                            <span class="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300 text-xs font-semibold mb-3">
                                Manicure Specialist
                            </span>
                            <div class="flex items-center gap-1 mb-4">
                                <span class="material-symbols-outlined text-yellow-400 filled" style="font-variation-settings: 'FILL' 1; font-size: 18px;">star</span>
                                <span class="text-sm font-bold text-luxe-text dark:text-white">5.0</span>
                                <span class="text-xs text-luxe-text-secondary ml-1">(42 reviews)</span>
                            </div>
                            <div class="w-full border-t border-gray-100 dark:border-white/5 my-2"></div>
                            <div class="w-full py-2 flex flex-col gap-2 mb-4">
                                <p class="text-xs text-luxe-text-secondary flex items-center justify-center gap-1">
                                    <span class="material-symbols-outlined" style="font-size: 14px;">mail</span>
                                    marcus.c@luxenail.com
                                </p>
                            </div>
                            <div class="mt-auto w-full flex items-center justify-between gap-3">
                                <div class="flex items-center gap-2">
                                    <span class="text-xs font-medium text-luxe-text-secondary">Active</span>
                                    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input checked="" class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 ease-in-out" id="toggle5" name="toggle" type="checkbox"/>
                                        <label class="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer transition-colors duration-300" for="toggle5"></label>
                                    </div>
                                </div>
                                <button class="bg-luxe-primary-light hover:bg-primary hover:text-white text-primary rounded-xl px-4 py-2 text-xs font-bold transition-colors">
                                    Edit Profile
                                </button>
                            </div>
                        </div>

                        <!-- Add New Placeholder Card -->
                        <div class="bg-transparent border-2 border-dashed border-primary/20 dark:border-white/10 p-6 rounded-[20px] hover:bg-luxe-primary-light/30 dark:hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer min-h-[360px] group">
                            <div class="w-16 h-16 rounded-full bg-luxe-primary-light dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-primary" style="font-size: 32px;">add</span>
                            </div>
                            <h3 class="font-serif text-xl font-bold text-primary mb-1">Add New Worker</h3>
                            <p class="text-sm text-luxe-text-secondary">Register a new staff member</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    `,
    styles: [`
        .toggle-checkbox:checked {
            right: 0;
            border-color: #ec1349;
        }
        .toggle-checkbox:checked + .toggle-label {
            background-color: #ec1349;
        }
    `]
})
export class AdminUsersComponent { }
