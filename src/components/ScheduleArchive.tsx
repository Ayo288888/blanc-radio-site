const schedule = [
  { time: '7:00AM-9:00AM', program: 'Morning Vibes' },
  { time: '9:00AM-11:00AM', program: 'Urban Drive' },
  { time: '12:00PM-2:00PM', program: 'Midday Recharge' },
  { time: '2:00PM-4:00PM', program: 'Hot Mic' },
  { time: '4:00PM-6:00PM', program: 'Sport Tori' },
  { time: '6:00PM-8:00PM', program: 'The Underground' },
  { time: '8:00PM-11:00PM', program: 'This Week on Air' },
];

const archives = [
  { year: 1356, event: 'Battle of Poitiers — An English army led by Edward the Black Prince defeats a French army, capturing King John II' },
  { year: 1777, event: 'During the American Revolutionary War, the First Battle of Saratoga (also called Battle of Freeman\'s Farm) begins with a three-column attack by British General Burgoyne.' },
  { year: 1796, event: 'George Washington\'s Farewell Address is published, in which he urges the United States to avoid permanent alliances and stresses national unity' },
  { year: 1796, event: 'George Washington\'s Farewell Address is published, in which he urges the United States to avoid permanent alliances and stresses national unity' },
  { year: 1893, event: 'New Zealand becomes the first self-governing country to grant women the right to vote in national elections.' },
];

export default function ScheduleArchive() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Today's Schedule</h2>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 font-medium whitespace-nowrap">{item.time}</span>
                  <span className="text-blue-600 font-semibold">{item.program}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Today In The Archives</h2>
            <div className="space-y-6">
              {archives.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-700">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm text-gray-700 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
