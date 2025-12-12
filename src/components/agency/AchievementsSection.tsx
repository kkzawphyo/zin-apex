import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export function AchievementsSection() {
  // University entrance results data for 2023-2025
  const entranceData = [
    {
      year: '2023',
      april: { applied: 1, accepted: 1, rate: 100 },
      july: { applied: 0, accepted: 0, rate: 100 },
      october: { applied: 6, accepted: 5, rate: 83.3 },
      january: { applied: 0, accepted: 0, rate: 100 }
    },
    {
      year: '2024',
      april: { applied: 15, accepted: 15, rate: 100 },
      july: { applied: 0, accepted: 0, rate: 100},
      october: { applied: 16, accepted: 16, rate: 100 },
      january: { applied: 0, accepted: 0, rate: 100 }
    },
    {
      year: '2025',
      april: { applied: 29, accepted: 28, rate: 96.5 },
      july: { applied: 5, accepted: 5, rate: 100 },
      october: { applied: 4, accepted: 4, rate: 100 },
      january: { applied: 0, accepted: 0, rate: 100 }
    },
  ];

  // Transform data for charts
  const successRateData = entranceData.map(year => ({
    year: year.year,
    aprilRate: year.april.rate,
    julyRate: year.july.rate,
    octoberRate: year.october.rate,
    januaryRate: year.january.rate,
    averageRate: (
      (year.april.rate + year.july.rate + year.october.rate + year.january.rate) / 4
    ).toFixed(1)
  }));

  const topUniversities = [
    { name: "University of Tokyo", students: 45, rank: "1st" },
    { name: "Kyoto University", students: 38, rank: "2nd" },
    { name: "Waseda University", students: 52, rank: "3rd" },
    { name: "Keio University", students: 35, rank: "4th" },
    { name: "Tohoku University", students: 28, rank: "5th" },
    { name: "Osaka University", students: 31, rank: "6th" }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Our COE Results</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              This track record demonstrates Zin Apex Education's commitment and capability in guiding students successfully through the Japanese immigration and study application process.
            </p>
          </div>

          {/* Charts Section */}
          <Tabs defaultValue="applications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="applications">Acceptance Rates</TabsTrigger>
              <TabsTrigger value="success-rate">Success Rate Trends</TabsTrigger>
              {/* <TabsTrigger value="universities">Top Universities</TabsTrigger> */}
            </TabsList>

            {/* Bar Chart - Acceptance Rates */}
            <TabsContent value="applications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>University Acceptance Rates (2023-2025)</CardTitle>
                  <CardDescription>
                    Acceptance rate (%) by intake: April, July, October, January
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={successRateData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} unit="%" />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Bar dataKey="aprilRate" fill="#3b82f6" name="April Intake" />
                        <Bar dataKey="julyRate" fill="#1d4ed8" name="July Intake" />
                        <Bar dataKey="octoberRate" fill="#f59e0b" name="October Intake" />
                        <Bar dataKey="januaryRate" fill="#22c55e" name="January Intake" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Line Chart - Success Rate Trends */}
            <TabsContent value="success-rate" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Success Rate Trends (2023-2025)</CardTitle>
                  <CardDescription>
                    Percentage of successful university applications by intake period
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={successRateData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} unit="%" />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Line type="monotone" dataKey="aprilRate" stroke="#3b82f6" strokeWidth={3} name="April Intake" />
                        <Line type="monotone" dataKey="julyRate" stroke="#1d4ed8" strokeWidth={3} name="July Intake" />
                        <Line type="monotone" dataKey="octoberRate" stroke="#f59e0b" strokeWidth={3} name="October Intake" />
                        <Line type="monotone" dataKey="januaryRate" stroke="#22c55e" strokeWidth={3} name="January Intake" />
                        <Line type="monotone" dataKey="averageRate" stroke="#059669" strokeWidth={3} strokeDasharray="5 5" name="Average" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Top Universities */}
            {/* <TabsContent value="universities" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Top University Placements (2023-2025)</CardTitle>
                  <CardDescription>
                    Most popular universities among our successfully placed students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topUniversities.map((university, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                            {university.rank.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-medium">{university.name}</h4>
                            <p className="text-sm text-muted-foreground">Ranked {university.rank} choice</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{university.students}</div>
                          <div className="text-sm text-muted-foreground">students</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent> */}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
