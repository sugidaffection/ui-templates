const menuSections = [
  {
    title: 'MENU',
    items: [
      { label: 'Dashboard', active: true },
      { label: 'Transactions' },
      { label: 'Budgeting' },
      { label: 'Investments' },
      { label: 'Reports', badge: 'NEW' }
    ]
  },
  {
    title: 'MANAGEMENT',
    items: [{ label: 'Invoices' }, { label: 'Subscriptions' }, { label: 'Goals' }]
  },
  {
    title: 'SYSTEM',
    items: [{ label: 'Integrations' }, { label: 'Settings' }, { label: 'Help & Support' }]
  }
]

const stats = [
  { title: 'Income', value: '$24,300', hint: '+6.1% Last Period', primary: true },
  { title: 'Expenses', value: '$18,750', hint: '-2.4% Last Period' },
  { title: 'Net', value: '+$5,550', hint: 'Net income after expenses' },
  { title: 'Savings', value: '22.8%', hint: 'Portion of income retained' }
]

const currencies = [
  { flag: '🇺🇸', code: 'USD', rate: '0.87', change: '↑ 0.87', value: '102.43', up: true },
  { flag: '🇪🇺', code: 'EUR', rate: '-0.0076', change: '↓ 0.80', value: '1.0627', up: false }
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function IconCircle({ children }) {
  return <span className="grid h-9 w-9 place-items-center rounded-full border border-[#e7e7e7] bg-white text-[#4e4e4e]">{children}</span>
}

function App() {
  return (
    <main className="min-h-screen bg-[#e9e9e9] p-7 text-[#111315]">
      <div className="mx-auto max-w-[1280px] rounded-[30px] border border-[#e1e1e1] bg-[#f4f4f4] p-4 shadow-[0_32px_60px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-[220px_1fr] gap-4">
          <aside className="flex min-h-[860px] flex-col rounded-[20px] border border-[#e7e7e7] bg-[#f3f3f3] p-5">
            <div className="mb-8 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#1272de] text-lg text-white">⬢</div>
              <h2 className="text-[36px] font-semibold leading-none">Uwang</h2>
            </div>

            {menuSections.map((section) => (
              <div key={section.title} className="mb-7">
                <p className="mb-3 text-[11px] font-medium tracking-wide text-[#a3a3a3]">{section.title}</p>
                <ul className="space-y-1.5">
                  {section.items.map((item) => (
                    <li
                      key={item.label}
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-[14px] ${
                        item.active ? 'bg-white font-medium text-[#131313] shadow-sm' : 'text-[#7f7f7f]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.badge && <span className="rounded bg-[#1170db] px-1.5 py-0.5 text-[9px] font-semibold text-white">{item.badge}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-auto flex items-center gap-3 rounded-xl bg-white p-3">
              <div className="h-10 w-10 rounded-full bg-[radial-gradient(circle_at_35%_25%,#d2d2d2,#575757)]" />
              <div>
                <p className="text-[17px] font-medium leading-tight">Roy Kiyoshi</p>
                <p className="text-xs text-[#8e8e8e]">Administrator</p>
              </div>
            </div>
          </aside>

          <section className="space-y-4">
            <header className="flex items-center justify-between rounded-[20px] border border-[#e7e7e7] bg-[#f7f7f7] p-3">
              <div className="flex w-[56%] items-center justify-between rounded-2xl border border-[#e7e7e7] bg-white px-4 py-3 text-sm text-[#a1a1a1]">
                <span>🔍 Search transactions, accounts, reports...</span>
                <span className="font-medium text-[#757575]">⌘ F</span>
              </div>
              <div className="flex items-center gap-2.5">
                <IconCircle>✉</IconCircle>
                <IconCircle>◌</IconCircle>
                <IconCircle>⌄</IconCircle>
                <button className="rounded-full bg-[#1172de] px-5 py-2.5 text-[30px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">+ Add Transactions</button>
              </div>
            </header>

            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-[58px] font-semibold leading-none tracking-[-0.02em]">Financial Overview</h1>
                <p className="mt-2 text-[19px] text-[#858585]">A real-time snapshot of your financial health.</p>
              </div>
              <div className="flex gap-3 text-[16px]">
                <button className="rounded-full border border-[#e3e3e3] bg-white px-5 py-2.5">◌ Personal</button>
                <button className="rounded-full border border-[#e3e3e3] bg-white px-5 py-2.5">◷ January 12, 2026 - January 31, 2026</button>
              </div>
            </div>

            <div className="grid grid-cols-[1.5fr_1.45fr_0.85fr] gap-3">
              <article className="rounded-[22px] bg-white p-4">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-[37px] font-medium">Total Balance</h3>
                  <span className="rounded-full border border-[#ececec] px-3 py-1 text-[14px] text-[#848484]">🇺🇸 USD ▾</span>
                </div>
                <div className="flex items-end gap-2">
                  <p className="text-[59px] font-semibold leading-none">$128,450</p>
                  <p className="mb-1 text-[55px] font-semibold leading-none text-[#9b9b9b]">.75</p>
                  <span className="mb-2 rounded-md bg-[#d8f4cd] px-1.5 py-0.5 text-xs font-semibold text-[#4fa63a]">+15%</span>
                </div>
                <p className="mb-4 mt-1 text-sm text-[#9d9d9d]">Last month</p>

                <div className="rounded-2xl bg-[#f5f5f5] p-4">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <p className="text-[35px] font-medium leading-tight">Create Transfer</p>
                      <p className="text-[15px] text-[#9a9a9a]">Recents Accounts</p>
                    </div>
                    <button className="grid h-8 w-8 place-items-center rounded-full bg-white text-sm">↗</button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center -space-x-2">
                      <span className="h-8 w-8 rounded-full border-2 border-[#f5f5f5] bg-slate-300" />
                      <span className="h-8 w-8 rounded-full border-2 border-[#f5f5f5] bg-slate-500" />
                      <span className="h-8 w-8 rounded-full border-2 border-[#f5f5f5] bg-amber-300" />
                      <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#f5f5f5] bg-[#1272de] text-xs font-semibold text-white">+3</span>
                    </div>
                    <button className="rounded-full border border-[#e3e3e3] bg-white px-4 py-2 text-[15px]">+ Add New</button>
                  </div>
                </div>
              </article>

              <article className="grid grid-cols-2 gap-3 rounded-[22px] bg-[#f2f2f2] p-2.5">
                {stats.map((card) => (
                  <div
                    key={card.title}
                    className={`rounded-[16px] p-4 ${
                      card.primary
                        ? 'bg-[linear-gradient(145deg,#1f82ee,#0b61c8)] text-white shadow-[inset_0_-14px_24px_rgba(0,0,0,0.1)]'
                        : 'bg-white text-[#161616]'
                    }`}
                  >
                    <p className="text-[16px] font-medium">{card.title}</p>
                    <p className="mt-7 text-[44px] font-semibold leading-none">{card.value}</p>
                    <p className={`mt-2 text-xs ${card.primary ? 'text-blue-100' : 'text-[#8d8d8d]'}`}>{card.hint}</p>
                  </div>
                ))}
              </article>

              <article className="rounded-[22px] bg-white p-4">
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="text-[43px] font-medium leading-[0.95]">Personal<br />Notes</h3>
                  <button className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f3f3] text-lg">+</button>
                </div>
                <div className="mt-8 rounded-2xl bg-[#f5f5f5] p-3">
                  <p className="rounded-full bg-white px-2 py-1 text-xs text-[#777]">◷ 3h ago</p>
                  <p className="mt-4 text-[37px] font-medium leading-tight">Review subscriptions</p>
                  <p className="mt-2 text-[14px] text-[#8d8d8d]">Check unused subscriptions before the end of the month.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <span className="h-8 w-8 rounded-full border-2 border-[#f5f5f5] bg-amber-200" />
                      <span className="h-8 w-8 rounded-full border-2 border-[#f5f5f5] bg-slate-400" />
                    </div>
                    <button className="grid h-8 w-8 place-items-center rounded-full bg-white">⋯</button>
                  </div>
                </div>
              </article>
            </div>

            <div className="grid grid-cols-[0.95fr_1.8fr] gap-3">
              <div className="space-y-3">
                <article className="rounded-[22px] bg-white p-4">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-[39px] font-medium leading-none">Currencies Market</h3>
                    <button className="grid h-8 w-8 place-items-center rounded-full bg-[#f3f3f3]">↗</button>
                  </div>
                  <div className="space-y-3">
                    {currencies.map((currency) => (
                      <div key={currency.code} className="grid grid-cols-[1.7fr_1fr_1fr] items-center text-[14px]">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{currency.flag}</span>
                          <span className="font-medium">{currency.code}</span>
                          <span className="text-[#9a9a9a]">{currency.rate}</span>
                        </div>
                        <span className={currency.up ? 'text-[#55b33d]' : 'text-[#d14646]'}>{currency.change}</span>
                        <span className="justify-self-end font-medium">{currency.value}</span>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-[22px] bg-white p-4">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-[39px] font-medium leading-none">Top Spending</h3>
                    <button className="grid h-8 w-8 place-items-center rounded-full bg-[#f3f3f3]">↗</button>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#8e8e8e]">
                    <span className="inline-block h-8 w-16 rounded bg-[repeating-linear-gradient(90deg,#d9d9d9_0_2px,transparent_2px_4px)]" />
                    <span className="h-2 w-2 rounded-full bg-[#1172de]" /> Apps Subscription
                    <span className="h-2 w-2 rounded-full bg-[#d5d5d5]" /> Others
                  </div>
                </article>
              </div>

              <article className="rounded-[22px] bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-[39px] font-medium leading-none">Balance Overview</h3>
                  <div className="flex gap-2">
                    <IconCircle>◔</IconCircle>
                    <IconCircle>⌄</IconCircle>
                    <IconCircle>↗</IconCircle>
                  </div>
                </div>
                <div className="relative h-[278px] overflow-hidden rounded-2xl border border-[#f0f0f0] bg-[linear-gradient(to_bottom,transparent_15%,#ececec_16%,transparent_17%)] [background-size:100%_40px]">
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 760 260" preserveAspectRatio="none">
                    <path d="M0 150 C35 30,80 220,120 140 C160 50,200 10,250 120 C300 210,330 80,370 145 C400 190,450 260,500 95 C545 35,570 255,620 88 C665 35,705 230,760 95" fill="none" stroke="#0f73df" strokeWidth="3.5" />
                    <path d="M0 128 C45 230,90 20,140 125 C185 210,220 35,265 110 C305 172,345 35,390 105 C430 150,475 30,520 88 C555 52,610 205,652 82 C695 48,725 220,760 90" fill="none" stroke="#9dcaf6" strokeWidth="3.5" />
                  </svg>
                  <div className="absolute left-[63%] top-[57%] rounded-lg bg-[#1172de] px-3 py-1 text-xs font-medium text-white">$15,000</div>
                  <div className="absolute inset-x-3 bottom-3 flex justify-between text-xs text-[#7d7d7d]">
                    {months.map((month) => (
                      <span key={month}>{month}</span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
