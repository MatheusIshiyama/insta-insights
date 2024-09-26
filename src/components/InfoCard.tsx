import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideProps } from 'lucide-react';

type InfoCardProps = {
  item: {
    title: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
    value: string;
    change: string;
    changeType: string;
    color: string;
  };
};

export function InfoCard({ item }: InfoCardProps) {
  return (
    <Card className={`transition-all duration-200 hover:shadow-lg overflow-hidden`}>
      <div className={`h-2 ${item.color}`}></div>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
        <item.icon className={`w-4 h-4 ${item.color} text-white rounded-full p-1`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{item.value}</div>
        <p className={`text-xs ${item.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>{item.change} from last month</p>
      </CardContent>
    </Card>
  );
}
