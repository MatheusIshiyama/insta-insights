import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BarChart, TrendingUp, Users, Zap } from 'lucide-react';

export default function Component() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 text-center lg:text-left">
            <div className="space-y-4 lg:w-1/2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Unlock Your Instagram Potential
              </h1>
              <p className="mx-auto lg:mx-0 max-w-[700px] text-zinc-200 md:text-xl lg:text-2xl">
                Analyze, optimize, and grow your Instagram presence with powerful insights and data-driven strategies.
              </p>
              <div className="space-x-4">
                <Button className="bg-white text-pink-600 hover:bg-zinc-200 text-lg py-2 px-6">Start Free Trial</Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 text-lg py-2 px-6">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg bg-white/10 backdrop-blur-lg p-8">
                <BarChart className="h-32 w-32 mx-auto text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-pink-600 lg:text-4xl">Powerful Features for Instagram Growth</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start justify-center">
            <div className="flex flex-col items-center space-y-2 border-gray-200 p-6 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl">
              <TrendingUp className="h-12 w-12 text-pink-500" />
              <h3 className="text-xl font-bold text-pink-600 lg:text-2xl">Performance Analytics</h3>
              <p className="text-zinc-500 text-center">
                Track your account growth, engagement rates, and content performance with detailed analytics.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-200 p-6 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl">
              <Users className="h-12 w-12 text-pink-500" />
              <h3 className="text-xl font-bold text-pink-600 lg:text-2xl">Audience Insights</h3>
              <p className="text-zinc-500 text-center">
                Understand your followers' demographics, interests, and behavior to tailor your content strategy.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-200 p-6 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl">
              <Zap className="h-12 w-12 text-pink-500" />
              <h3 className="text-xl font-bold text-pink-600 lg:text-2xl">Post Optimization</h3>
              <p className="text-zinc-500 text-center">
                Get AI-powered recommendations for the best times to post and hashtags to use for maximum reach.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-8 text-white">
            <div className="space-y-2 lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Boost Your Instagram?</h2>
              <p className="max-w-[600px] text-zinc-200 md:text-xl/relaxed lg:text-2xl/relaxed">
                Join thousands of creators and businesses using InstaInsights to elevate their Instagram strategy.
              </p>
            </div>
            <div className="w-full lg:w-1/2 max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  className="flex-1 bg-white text-zinc-900 placeholder:text-zinc-400 text-lg py-2 px-4"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="bg-white text-pink-600 hover:bg-zinc-200 text-lg py-2 px-6">Get Started</Button>
              </form>
              <p className="text-sm text-zinc-200">14-day free trial. No credit card required.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
