const currencies = [
  { code: 'USD', rate: '0.87', delta: '+0.87', value: '102.43', dir: 'up' },
  { code: 'EUR', rate: '-0.0076', delta: '↓ 0.80', value: '1.0627', dir: 'down' }
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function App() {
  return (
    <main className="min-h-screen bg-[#ececec] p-8">
      <div className="mx-auto max-w-[1400px] rounded-[26px] border border-[#dedede] bg-[#f7f7f7] p-4 shadow-soft">
        <div className="grid grid-cols-[250px_1fr] gap-4">
          <aside className="rounded-[20px] border border-[#e8e8e8] bg-[#f4f4f4] p-5">
            <div className="mb-8 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#0e73de] text-white">⬢</div>
              <h2 className="text-[31px] font-semibold leading-none">Uwang</h2>
            </div>
            <p className="mb-3 text-xs uppercase tracking-wide text-[#9a9a9a]">Menu</p>
            <ul className="space-y-2 text-[28px]">
              <li className="flex items-center gap-3 rounded-lg bg-white px-3 py-2 font-medium text-[#101010] shadow-sm">Dashboard</li>
              <li className="px-3 py-2 text-[#8d8d8d]">Transactions</li>
              <li className="px-3 py-2 text-[#8d8d8d]">Budgeting</li>
              <li className="px-3 py-2 text-[#8d8d8d]">Investments</li>
              <li className="px-3 py-2 text-[#8d8d8d]">Reports <span className="ml-2 rounded bg-blue-600 px-2 py-0.5 text-xs text-white">NEW</span></li>
            </ul>

            <p className="mb-3 mt-8 text-xs uppercase tracking-wide text-[#9a9a9a]">Management</p>
            <ul className="space-y-2 text-[28px] text-[#8d8d8d]">
              <li className="px-3 py-2">Invoices</li>
              <li className="px-3 py-2">Subscriptions</li>
              <li className="px-3 py-2">Goals</li>
            </ul>

            <p className="mb-3 mt-8 text-xs uppercase tracking-wide text-[#9a9a9a]">System</p>
            <ul className="space-y-2 text-[28px] text-[#8d8d8d]">
              <li className="px-3 py-2">Integrations</li>
              <li className="px-3 py-2">Settings</li>
              <li className="px-3 py-2">Help &amp; Support</li>
            </ul>

            <div className="mt-12 flex items-center gap-3 rounded-xl bg-white p-3">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-gray-300 to-gray-700" />
              <div>
                <p className="text-[20px] font-medium">Roy Kiyoshi</p>
                <p className="text-[14px] text-[#8d8d8d]">Administrator</p>
              </div>
            </div>
          </aside>

          <section className="space-y-4">
            <header className="flex items-center justify-between rounded-[20px] border border-[#e8e8e8] bg-[#f7f7f7] p-3">
              <div className="flex w-[56%] items-center justify-between rounded-2xl border border-[#e9e9e9] bg-[#f9f9f9] px-4 py-3 text-[#a0a0a0]">Search transactions, accounts, reports... <span>⌘ F</span></div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[#ddd]">✉</span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[#ddd]">◌</span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[#ddd]">⌂</span>
                <button className="rounded-full bg-[#106ed8] px-6 py-3 text-white shadow">+ Add Transactions</button>
              </div>
            </header>

            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-6xl font-semibold tracking-tight">Financial Overview</h1>
                <p className="mt-2 text-[28px] text-[#969696]">A real-time snapshot of your financial health.</p>
              </div>
              <div className="flex gap-3 text-[23px]">
                <button className="rounded-full border border-[#ddd] bg-white px-6 py-3">Personal</button>
                <button className="rounded-full border border-[#ddd] bg-white px-6 py-3">January 12, 2026 - January 31, 2026</button>
              </div>
            </div>

            <div className="grid grid-cols-[1.45fr_1.5fr_0.85fr] gap-3">
              <article className="rounded-3xl bg-white p-5">
                <div className="mb-4 flex items-center justify-between text-[25px]">
                  <span>Total Balance</span>
                  <span className="text-[#8d8d8d]">USD ▾</span>
                </div>
                <p className="text-7xl font-semibold">$128,450<span className="text-[#8d8d8d]">.75</span></p>
                <p className="mt-1 text-[#8bc34a]">+15% <span className="text-[#8d8d8d]">Last month</span></p>
                <div className="mt-6 rounded-2xl bg-[#f5f5f5] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl">Create Transfer</p>
                      <p className="text-[20px] text-[#9a9a9a]">Recents Accounts</p>
                    </div>
                    <button className="h-10 w-10 rounded-full bg-white">↗</button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <span className="h-9 w-9 rounded-full bg-slate-300" />
                      <span className="h-9 w-9 rounded-full bg-slate-400" />
                      <span className="h-9 w-9 rounded-full bg-slate-500" />
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-600 text-xs text-white">+3</span>
                    </div>
                    <button className="rounded-full border border-[#ddd] px-4 py-2">+ Add New</button>
                  </div>
                </div>
              </article>

              <article className="grid grid-cols-2 gap-3 rounded-3xl bg-[#f5f5f5] p-3">
                <div className="rounded-2xl bg-[#0e73de] p-4 text-white">
                  <p className="text-[22px]">Income</p>
                  <p className="mt-7 text-5xl">$24,300</p>
                  <p className="mt-2 text-sm text-blue-100">+15% Last Period</p>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-[22px]">Expenses</p>
                  <p className="mt-7 text-5xl">$18,750</p>
                  <p className="mt-2 text-sm text-[#88b04b]">+24% Last Period</p>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-[22px]">Net</p>
                  <p className="mt-7 text-5xl">+$5,550</p>
                  <p className="mt-2 text-sm text-[#949494]">Net income after expenses</p>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-[22px]">Savings</p>
                  <p className="mt-7 text-5xl">22.8%</p>
                  <p className="mt-2 text-sm text-[#949494]">Portion of income retained</p>
                </div>
              </article>

              <article className="rounded-3xl bg-white p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-[34px] leading-tight">Personal<br />Notes</h3>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f0f0f0]">+</span>
                </div>
                <div className="rounded-2xl bg-[#f5f5f5] p-3">
                  <p className="text-[16px]">⏱ 3h ago</p>
                  <p className="mt-3 text-[28px]">Review subscriptions</p>
                  <p className="mt-2 text-[17px] text-[#969696]">Check unused subscriptions before month's end.</p>
                </div>
              </article>
            </div>

            <div className="grid grid-cols-[0.95fr_1.8fr] gap-3">
              <div className="space-y-3">
                <article className="rounded-3xl bg-white p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-[34px]">Currencies Market</h3>
                    <span>↗</span>
                  </div>
                  {currencies.map((currency) => (
                    <div key={currency.code} className="mb-4 flex items-center justify-between text-[24px]">
                      <div className="flex items-center gap-3">
                        <span className="h-9 w-9 rounded-full bg-[#0e73de]" />
                        <span>{currency.code}</span>
                        <span className="text-[#a1a1a1]">{currency.rate}</span>
                      </div>
                      <span className={currency.dir === 'up' ? 'text-green-500' : 'text-red-500'}>{currency.delta}</span>
                      <span>{currency.value}</span>
                    </div>
                  ))}
                </article>

                <article className="rounded-3xl bg-white p-4">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-[34px]">Top Spending</h3>
                    <span>↗</span>
                  </div>
                  <div className="text-[21px] text-[#8f8f8f]">Apps Subscription • Others</div>
                </article>
              </div>

              <article className="rounded-3xl bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-[34px]">Balance Overview</h3>
                  <div className="flex gap-2 text-[#6f6f6f]">
                    <span className="grid h-7 w-7 place-items-center rounded-full border">◔</span>
                    <span className="grid h-7 w-7 place-items-center rounded-full border">↻</span>
                    <span className="grid h-7 w-7 place-items-center rounded-full border">↗</span>
                  </div>
                </div>
                <div className="relative h-[280px] rounded-2xl bg-[linear-gradient(to_bottom,transparent_19%,#efefef_20%,transparent_21%)] [background-size:100%_56px]">
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 760 260" preserveAspectRatio="none">
                    <path d="M0 140 C40 30,80 220,120 140 C160 60,210 10,250 120 C290 220,330 80,370 150 C410 220,450 250,490 90 C530 20,560 250,600 70 C640 10,670 250,710 90 C730 40,745 130,760 70" fill="none" stroke="#0e73de" strokeWidth="4" />
                    <path d="M0 130 C45 250,90 20,130 140 C170 240,220 20,260 100 C300 180,340 20,380 110 C420 170,470 20,510 100 C550 200,600 30,640 80 C680 100,720 220,760 90" fill="none" stroke="#9cc8f5" strokeWidth="4" />
                  </svg>
                  <div className="absolute inset-x-2 bottom-1 flex justify-between px-2 text-sm text-[#787878]">
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
