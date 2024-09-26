import { InfoCard } from '@/components/InfoCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

import { BarChart2, TrendingUp, Users, Heart, MessageCircle, Calendar } from 'lucide-react';

export default function InstagramInsightsDashboard1() {
  const infos = [
    { title: 'Total Followers', icon: Users, value: '10,482', change: '+2.5%', changeType: 'positive', color: 'bg-pink-500' },
    {
      title: 'Engagement Rate',
      icon: TrendingUp,
      value: '3.6%',
      change: '-0.3%',
      changeType: 'negative',
      color: 'bg-purple-500',
    },
    { title: 'Avg. Likes per Post', icon: Heart, value: '892', change: '+5.1%', changeType: 'positive', color: 'bg-red-500' },
    {
      title: 'Avg. Comments per Post',
      icon: MessageCircle,
      value: '45',
      change: '+1.8%',
      changeType: 'positive',
      color: 'bg-blue-500',
    },
  ];

  const followersGrowth = [
    { month: 'Jan', value: 9500 },
    { month: 'Fev', value: 9800 },
    { month: 'Mar', value: 10100 },
    { month: 'Apr', value: 10300 },
  ];

  const bestFollowersGrowthMonth = followersGrowth.reduce((bestMonth, month) => {
    if (bestMonth.value < month.value) bestMonth = month;

    return bestMonth;
  }, followersGrowth[0]);

  const engagementBreakdown = [
    { name: 'Likes', value: 60, color: 'bg-pink-500' },
    { name: 'Comments', value: 20, color: 'bg-purple-500' },
    { name: 'Saves', value: 15, color: 'bg-blue-500' },
    { name: 'Shares', value: 5, color: 'bg-green-500' },
  ];

  const bestPostingTimes = [
    { day: 'Monday', times: ['9:00 AM', '6:00 PM'], color: 'bg-pink-100' },
    { day: 'Wednesday', times: ['12:00 PM', '8:00 PM'], color: 'bg-purple-100' },
    { day: 'Friday', times: ['3:00 PM', '9:00 PM'], color: 'bg-blue-100' },
    { day: 'Saturday', times: ['11:00 AM', '7:00 PM'], color: 'bg-green-100' },
  ];

  const topPerformingHashtags = [
    { tag: '#photography', reach: '5.2K', color: 'bg-yellow-100' },
    { tag: '#travelblogger', reach: '4.8K', color: 'bg-orange-100' },
    { tag: '#foodie', reach: '4.3K', color: 'bg-red-100' },
    { tag: '#fitness', reach: '3.9K', color: 'bg-pink-100' },
  ];

  return (
    <main className="flex flex-col flex-1 justify-center py-8 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      <div className="container px-4 mx-auto space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {infos.map((item, index) => (
            <InfoCard key={index} item={item} />
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="transition-all duration-200 hover:shadow-lg overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500" />
            <CardHeader>
              <CardTitle>Follower Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between h-64">
                {followersGrowth.map(({ value }, index) => (
                  <div key={index} className="relative w-1/6 group mr-4">
                    <div
                      className="absolute bottom-0 w-full bg-gradient-to-t from-pink-500 to-purple-500 rounded-t transition-all duration-300 group-hover:from-pink-600 group-hover:to-purple-600"
                      style={{ height: `${(value / bestFollowersGrowthMonth.value) * 12.5}rem` }}
                    />
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-sm text-gray-500">
                {followersGrowth.map(({ month }, index) => (
                  <div key={index} className="relative w-1/6 group mr-4 flex justify-center">
                    <span className="relative flex items-end">{month}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="transition-all duration-200 hover:shadow-lg overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <CardHeader>
              <CardTitle>Engagement Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {engagementBreakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.name}</span>
                      <span>{item.value}%</span>
                    </div>
                    <Progress value={item.value} className="h-2 bg-gray-300" indicatorColor={item.color} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="transition-all duration-200 hover:shadow-lg overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
            <CardHeader>
              <CardTitle>Best Posting Times</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bestPostingTimes.map((item, index) => (
                  <div key={index} className={`flex items-center p-2 rounded-lg ${item.color} transition-colors duration-200`}>
                    <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="font-medium">{item.day}</span>
                    <span className="ml-auto">{item.times.join(', ')}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="transition-all duration-200 hover:shadow-lg overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <CardHeader>
              <CardTitle>Top Performing Hashtags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformingHashtags.map((item, index) => (
                  <div key={index} className={`flex items-center p-2 rounded-lg ${item.color} transition-colors duration-200`}>
                    <BarChart2 className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="font-medium">{item.tag}</span>
                    <span className="ml-auto">{item.reach} reach</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
