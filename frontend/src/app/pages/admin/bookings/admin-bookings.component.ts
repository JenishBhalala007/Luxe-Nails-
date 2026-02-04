import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admin-bookings',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex h-screen w-full bg-luxe-bg text-[#1b0d11] antialiased overflow-hidden font-display">
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
                <!-- Active Link -->
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-[#FFDDE5] text-luxe-text transition-colors group" href="/admin/bookings">
                    <span class="material-symbols-outlined text-primary group-hover:text-primary transition-colors">calendar_month</span>
                    <span class="text-sm font-semibold">Bookings</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/users">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">group</span>
                    <span class="text-sm font-medium">Users</span>
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
        <main class="flex-1 flex flex-col h-full overflow-hidden bg-luxe-bg relative">
            <!-- Mobile Header -->
            <div class="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-100">
                <h1 class="font-serif text-xl font-bold">Luxe Nail Art</h1>
                <button class="text-gray-600">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </div>
            
            <div class="flex-1 overflow-y-auto p-4 md:p-8 lg:px-12 scroll-smooth">
                <div class="max-w-[1200px] mx-auto flex flex-col gap-8 pb-10">
                    <!-- Header -->
                    <header>
                        <h2 class="font-serif text-4xl font-bold text-[#1b0d11] mb-2">Manage Bookings</h2>
                        <p class="text-gray-500 font-body text-sm">View and manage all salon appointments.</p>
                    </header>
                    
                    <!-- Toolbar -->
                    <div class="bg-white p-4 rounded-2xl shadow-soft flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div class="flex flex-col md:flex-row gap-4 w-full md:w-auto flex-1">
                            <!-- Search -->
                            <div class="relative w-full md:max-w-md">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span class="material-symbols-outlined text-rose-gold text-[20px]">search</span>
                                </div>
                                <input class="block w-full pl-10 pr-3 py-2.5 border-none bg-luxe-bg rounded-xl text-gray-900 placeholder-rose-gold/60 focus:ring-1 focus:ring-rose-gold/30 sm:text-sm font-body" placeholder="Search Client or Worker" type="text"/>
                            </div>
                            <!-- Date Picker -->
                            <div class="relative w-full md:w-64">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span class="material-symbols-outlined text-rose-gold text-[20px]">calendar_today</span>
                                </div>
                                <select class="block w-full pl-10 pr-10 py-2.5 border-none bg-luxe-bg rounded-xl text-gray-900 focus:ring-1 focus:ring-rose-gold/30 sm:text-sm appearance-none font-body cursor-pointer">
                                    <option>Feb 1, 2024 - Feb 28, 2024</option>
                                    <option>Jan 1, 2024 - Jan 31, 2024</option>
                                    <option>Dec 1, 2023 - Dec 31, 2023</option>
                                </select>
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <span class="material-symbols-outlined text-rose-gold text-[20px]">expand_more</span>
                                </div>
                            </div>
                        </div>
                        <!-- Export Button -->
                        <button class="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-rose-gold text-rose-gold hover:bg-rose-gold-light transition-all font-bold text-sm tracking-wide bg-white">
                            <span class="material-symbols-outlined text-[18px]">download</span>
                            <span>Export to CSV</span>
                        </button>
                    </div>
                    
                    <!-- Data Table -->
                    <div class="bg-white rounded-2xl shadow-soft overflow-hidden">
                        <div class="overflow-x-auto">
                            <table class="w-full min-w-[800px] text-left border-collapse">
                                <thead>
                                    <tr class="border-b border-gray-100">
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body">ID</th>
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body">Client</th>
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body">Worker</th>
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body">Service</th>
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body">Date / Time</th>
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body">Status</th>
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-50">
                                    <!-- Row 1 -->
                                    <tr class="hover:bg-[#fafafa] transition-colors group">
                                        <td class="py-4 px-6 text-sm text-gray-400 font-medium font-body">#1024</td>
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-3">
                                                <img alt="Sophia Miller" class="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm" data-alt="Portrait of Sophia Miller" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_bQ1TEk9sNsnoXdTsnQjY9P3X1S5uoOBSUayXIh4Ut2Q9rlJ0cex4G0kW7BpkiQqG4Zh8m0R9kCns8cTQeoMHxNVMyxXK4irEBPsq8_MzXotoCT0axTJYb7bGO-LNiQO5NTgsqzJWgpT_bmc2I5-8aVcvm9HfgnToNaFgXxY8lIkRcsNF4PnKLq5vs6zVgx9NBnVMxDH-T0MBHJ086ojM_6c9eto4C_tCxdpYYCMSpF-VdOsrRDn78OFLAo8uvIwNgsie4ULZ6Yu1"/>
                                                <div class="flex flex-col">
                                                    <span class="text-sm font-bold text-gray-900 font-body">Sophia Miller</span>
                                                    <span class="text-xs text-gray-500 font-body">sophia@example.com</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-3">
                                                <img alt="Sarah Jenkins" class="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm" data-alt="Portrait of Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9fSZAb12L0DzmyGpJZJHfq5qxKz0LMLms6uIOANY6gfPZPFqURtICRejA_IAh4rI-CoTQf87m4_TRxCdRIlO74E_7-__JVqWRjgN5qGs4vp1GFle4mzg-u5xTbVW49XFLk0DGkpKgtqSbbBuVHj85r8iZEHcf1p-dSpG0JFirVixD_Ek6Tsu427PYZ5K9ud_iZC6C3ICnbwaWXa8sFRpXjlJFpDq7i8XPoCm0axt8SwlOQ4Ftnev24ntl5vf70oPiaGiaM2EQWA0I"/>
                                                <span class="text-sm font-medium text-gray-700 font-body">Sarah Jenkins</span>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-luxe-bg text-gray-600 border border-gray-100 font-body">
                                                Gel Manicure
                                            </span>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div class="flex flex-col">
                                                <span class="text-sm font-medium text-gray-900 font-body">Feb 14, 2024</span>
                                                <span class="text-xs text-gray-400 font-body">10:00 AM</span>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 font-body">
                                                Completed
                                            </span>
                                        </td>
                                        <td class="py-4 px-6 text-right">
                                            <div class="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <button class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors" title="View Details">
                                                    <span class="material-symbols-outlined text-[18px]">visibility</span>
                                                </button>
                                                <button class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors" title="Edit">
                                                    <span class="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                                <button class="p-1.5 rounded-lg hover:bg-red-50 text-red-400 transition-colors" title="Delete">
                                                    <span class="material-symbols-outlined text-[18px]">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- Row 2 -->
                                    <tr class="hover:bg-[#fafafa] transition-colors group">
                                        <td class="py-4 px-6 text-sm text-gray-400 font-medium font-body">#1025</td>
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-3">
                                                <img alt="Michael Brown" class="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm" data-alt="Portrait of Michael Brown" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUoreyJ9zedxXRmycFMwrHuPzOQqH6xsBkDOJ40LRkqXtEQF7CTXXgFQy4jT5brd_nI7Wt5LZrJ3nY0p7T-Psn35Zactf-kVpPZyUi2eatbToQNKyfjSitorfmjoNG3FrWUase9Ll86TMzdzWV_XkdkhJFUDjs3RonwcbV4nPBwTHXHxVUEMXYrDAmZ-3S_EOlQy8r1azpILIhWBs3RQNryH1PvwiCFPrMWbcd6t1dk_p-99KHEn00QfBtojRrgASVIRmFMEbb9o9g"/>
                                                <div class="flex flex-col">
                                                    <span class="text-sm font-bold text-gray-900 font-body">Michael Brown</span>
                                                    <span class="text-xs text-gray-500 font-body">michael.b@example.com</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-3">
                                                <img alt="Emily Chen" class="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm" data-alt="Portrait of Emily Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqnt6MBq_JURcL0t15AefuaDQNBpk_bbvvC1F3-GoXrPiszeHSJn5IbjSLJH2bluubZqbqimM73G39tFgkde86wDoAQoDFF2XgiiHEK1vKiJkLqOSDWENGY5q_A2ivNnN94Vy3e7VQ4VWYGAaGR6E2hz8ohjqUdbmaVjc2v_Mhn-rxtHvv_h6PNntUwCWR8xnewLUGjDKfL9hsfsN4AUkhYOFWpD4A03vaq4Phq-Kltb0-HnznXzEgYdK5hz1I0117C0FCJzKL0ZNF"/>
                                                <span class="text-sm font-medium text-gray-700 font-body">Emily Chen</span>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-luxe-bg text-gray-600 border border-gray-100 font-body">
                                                Pedicure Deluxe
                                            </span>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div class="flex flex-col">
                                                <span class="text-sm font-medium text-gray-900 font-body">Feb 14, 2024</span>
                                                <span class="text-xs text-gray-400 font-body">11:30 AM</span>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 font-body">
                                                Pending
                                            </span>
                                        </td>
                                        <td class="py-4 px-6 text-right">
                                            <div class="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <button class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
                                                    <span class="material-symbols-outlined text-[18px]">visibility</span>
                                                </button>
                                                <button class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
                                                    <span class="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                                <button class="p-1.5 rounded-lg hover:bg-red-50 text-red-400 transition-colors">
                                                    <span class="material-symbols-outlined text-[18px]">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- Row 3 -->
                                    <tr class="hover:bg-[#fafafa] transition-colors group">
                                        <td class="py-4 px-6 text-sm text-gray-400 font-medium font-body">#1026</td>
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-3">
                                                <img alt="Chloe Davis" class="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm" data-alt="Portrait of Chloe Davis" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfVdUAgc72pKoD4gCQNtLj5ugpf-7IMqsCc3NmXrz4qqrE7w6bqmJmFXNcPN9S0StEVQY93zgozkEiwxcEkV3MQksG2jNGrvsJmvbXt569YSrIb31pFA0YQ0N-kg-67SgHNYbAKH4x6_P6clQZSQY8KBfo_6KMVmF54s3RbJIc6H8ckrkK2cCfedVzqV8-9ry4KPzo5G1jMDN6aWmVvqibTeqre4itPAVxfFhmBDwPwYv16rVS27YgXmeOXT8-RjDDndJuxKNSTWSJ"/>
                                                <div class="flex flex-col">
                                                    <span class="text-sm font-bold text-gray-900 font-body">Chloe Davis</span>
                                                    <span class="text-xs text-gray-500 font-body">chloe.d@example.com</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-3">
                                                <img alt="Sarah Jenkins" class="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm" data-alt="Portrait of Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC0USkfxgwnCOMuL0yfQBu_rKdbt9Jn4ioN59_-DoudpRq1uGrX2f59aDHqN7HVJl_OfaZjJpKjMruTWnwGTVV2dlwY9xuhO5RBpX2hggx1s8MIg3ifmEsTHC_y82VAaTeOGzgj3YMK4a-TPOQI3SBzslnLB_8ZKpMKo3n1qnzaV4AqGx3MxzkpW1IT8YKjnzQahaFdOBPtf97-ENcayaiCxnYV987Z8tYSZ6FLKRDrzkTWR0U0PKjJWjAPuIYWyuyvBIbw-73_4d1"/>
                                                <span class="text-sm font-medium text-gray-700 font-body">Sarah Jenkins</span>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-luxe-bg text-gray-600 border border-gray-100 font-body">
                                                Nail Art (Complex)
                                            </span>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div class="flex flex-col">
                                                <span class="text-sm font-medium text-gray-900 font-body">Feb 14, 2024</span>
                                                <span class="text-xs text-gray-400 font-body">01:00 PM</span>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 font-body">
                                                Cancelled
                                            </span>
                                        </td>
                                        <td class="py-4 px-6 text-right">
                                            <div class="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <button class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
                                                    <span class="material-symbols-outlined text-[18px]">visibility</span>
                                                </button>
                                                <button class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
                                                    <span class="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                                <button class="p-1.5 rounded-lg hover:bg-red-50 text-red-400 transition-colors">
                                                    <span class="material-symbols-outlined text-[18px]">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- Row 4 -->
                                    <tr class="hover:bg-[#fafafa] transition-colors group">
                                        <td class="py-4 px-6 text-sm text-gray-400 font-medium font-body">#1027</td>
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-3">
                                                <img alt="Layla Hassan" class="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm" data-alt="Portrait of Layla Hassan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF-4HgfdhpVHruj0k99gAHE4_rPdYJSYO8BM1zhboV0lSvJVixR1WP_oJkok4aJNottE2uglOMOVv4ghum4hknPtYEgq3cmNjePTzraQ9ZECVybdPSUFipeMCv7yQf50Td9xHrmR4DVZNTlQwNlg52eZhvdI7nqecrhsOWS3ppTn-tN6CGU_VqAQMkTQ2Q1iITVonW_-VnSkAv2YVorbxgtDbmtOzGJodftCddud0ooyDlFuUWUR6LxlsK5Q3apz24NVqQFFSI1OZB"/>
                                                <div class="flex flex-col">
                                                    <span class="text-sm font-bold text-gray-900 font-body">Layla Hassan</span>
                                                    <span class="text-xs text-gray-500 font-body">layla.h@example.com</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-3">
                                                <img alt="Jessica Wong" class="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm" data-alt="Portrait of Jessica Wong" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4qFlnGm_PdmW7G9j3du2i88smmkCrcW6k9lXfdDNg94NNv2Yh96R7IRE5wRs7Dhh4yUYvHCSrkXlZYYZSFgwSbrSVr4uotQ9WOlT9VgHWJZfTb6tUuUm-NZ2MSL6ItW_bQqjIqFCmu0x-JZs6bT8w4NYp3AGtFNPyteuzmAQZj9PYDSN3NusKnY3POHMxqo9-jkBFUVEqNqaWg_OtvpUqERPMA3owt_iScIKFQO92Y1BISBOD5mA3_H2O9zh5NlbSnqoW4hvxA8xk"/>
                                                <span class="text-sm font-medium text-gray-700 font-body">Jessica Wong</span>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-luxe-bg text-gray-600 border border-gray-100 font-body">
                                                Acrylics Full Set
                                            </span>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div class="flex flex-col">
                                                <span class="text-sm font-medium text-gray-900 font-body">Feb 14, 2024</span>
                                                <span class="text-xs text-gray-400 font-body">02:30 PM</span>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 font-body">
                                                Completed
                                            </span>
                                        </td>
                                        <td class="py-4 px-6 text-right">
                                            <div class="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <button class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
                                                    <span class="material-symbols-outlined text-[18px]">visibility</span>
                                                </button>
                                                <button class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
                                                    <span class="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                                <button class="p-1.5 rounded-lg hover:bg-red-50 text-red-400 transition-colors">
                                                    <span class="material-symbols-outlined text-[18px]">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- Row 5 -->
                                    <tr class="hover:bg-[#fafafa] transition-colors group">
                                        <td class="py-4 px-6 text-sm text-gray-400 font-medium font-body">#1028</td>
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-3">
                                                <img alt="Ava Johnson" class="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm" data-alt="Portrait of Ava Johnson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4KizaTFmYTxOAa5xkeYb_854vv2u3les4aCre0SDHt-k1FG6v5gTlocIs6LRRN4atWaO32iosAIs-AhqbEO0jwfJ6ZWteltfJErPWnaHqVyM15FLu8P7bXTcPj7Kwd24-CKJXUF0NnpriCQvANuUF1z87Gdhqyotj6OuVcbQ8aLW1SBX9WgXGEs7xzallf0DBw7-JSWFp6wYWepzEsxI6wMIK5Vwy96dv-Cw3-G03CRyQbiZEiqvVefyxZQGdwFjwz6Q71aZiIr9M"/>
                                                <div class="flex flex-col">
                                                    <span class="text-sm font-bold text-gray-900 font-body">Ava Johnson</span>
                                                    <span class="text-xs text-gray-500 font-body">ava.j@example.com</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-3">
                                                <img alt="Emily Chen" class="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm" data-alt="Portrait of Emily Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxwZM2N-_DXj1Adu7rqY8DX7XxBYhViZ1LcTVItNw2deKSHPKV1EBT5EcMw4ThyWj-sEs5dJ9dz_7VvwxRs3HigZ9x1YziqzlJRPrtaWILUNvuTSL2hCtHVOV4uIcHns5I4h0CY0mvcIreeqrhlWGoDVgggNzyobKRVzjbmW4e4l5ROoS_KQRg_PstJfgrtVU6x3e5Va8Wc8hKHPbjry4WqcBWjutbdfeQFLW8NzNx_tnTirpvRbw701eGyeHoQIIIf8N3Nxnb9CLX"/>
                                                <span class="text-sm font-medium text-gray-700 font-body">Emily Chen</span>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-luxe-bg text-gray-600 border border-gray-100 font-body">
                                                Polish Change
                                            </span>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div class="flex flex-col">
                                                <span class="text-sm font-medium text-gray-900 font-body">Feb 14, 2024</span>
                                                <span class="text-xs text-gray-400 font-body">03:45 PM</span>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 font-body">
                                                Pending
                                            </span>
                                        </td>
                                        <td class="py-4 px-6 text-right">
                                            <div class="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <button class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
                                                    <span class="material-symbols-outlined text-[18px]">visibility</span>
                                                </button>
                                                <button class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
                                                    <span class="material-symbols-outlined text-[18px]">edit</span>
                                                </button>
                                                <button class="p-1.5 rounded-lg hover:bg-red-50 text-red-400 transition-colors">
                                                    <span class="material-symbols-outlined text-[18px]">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <!-- Pagination -->
                        <div class="flex items-center justify-end gap-4 px-6 py-4 border-t border-gray-50 bg-white">
                            <button class="text-gray-400 hover:text-gray-600 text-sm font-medium font-body transition-colors">Previous</button>
                            <div class="flex items-center gap-1">
                                <button class="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold shadow-sm">1</button>
                                <button class="w-8 h-8 rounded-full text-gray-500 hover:bg-gray-100 text-sm font-medium transition-colors">2</button>
                                <button class="w-8 h-8 rounded-full text-gray-500 hover:bg-gray-100 text-sm font-medium transition-colors">3</button>
                            </div>
                            <button class="text-gray-600 hover:text-primary text-sm font-medium font-body transition-colors">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    `
})
export class AdminBookingsComponent { }
