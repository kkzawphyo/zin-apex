import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Clock, Users, BookOpen, CheckCircle } from 'lucide-react';

export function CoursesSection() {
  const courses = [
    {
      level: "N5",
      title: "Japanese Foundation",
      description: "Perfect for absolute beginners. Learn basic hiragana, katakana, and essential vocabulary for everyday situations.",
      duration: "3 months",
      students: "150+ enrolled",
      features: [
        "Video : Self-placed lessons",
        "Zoom : Live online classes",
        "Zoom + Video : Live + records for flexible learning",
      ],
      color: "bg-green-100 text-green-800",
      difficulty: "Beginner"
    },
    {
      level: "N4",
      title: "Elementary Japanese",
      description: "Build on your foundation with more complex grammar patterns and expand your vocabulary significantly.",
      duration: "4 months",
      students: "120+ enrolled",
      features: [
        "Video : Self-placed lessons",
        "Zoom : Live online classes",
        "Zoom + Video : Live + records for flexible learning",
      ],
      color: "bg-blue-100 text-blue-800",
      difficulty: "Elementary"
    },
    // {
    //   level: "N3",
    //   title: "Intermediate Japanese",
    //   description: "Develop fluency in daily conversations and understand more complex texts. Gateway to university preparation.",
    //   duration: "6 months",
    //   students: "100+ enrolled",
    //   features: [
    //     "650+ Kanji characters",
    //     "Abstract concept expression",
    //     "News and article reading",
    //     "Formal presentation skills",
    //     "Business conversation basics"
    //   ],
    //   color: "bg-yellow-100 text-yellow-800",
    //   difficulty: "Intermediate"
    // },
    // {
    //   level: "N2",
    //   title: "Upper Intermediate",
    //   description: "Master advanced grammar and vocabulary needed for university studies and professional environments.",
    //   duration: "8 months",
    //   students: "80+ enrolled",
    //   features: [
    //     "1000+ Kanji characters",
    //     "Academic writing skills",
    //     "Complex grammar patterns",
    //     "University lecture comprehension",
    //     "Research paper reading"
    //   ],
    //   color: "bg-orange-100 text-orange-800",
    //   difficulty: "Upper Intermediate"
    // },
    // {
    //   level: "N1",
    //   title: "Advanced Mastery",
    //   description: "Achieve near-native proficiency with sophisticated language skills for academic and professional success.",
    //   duration: "12 months",
    //   students: "60+ enrolled",
    //   features: [
    //     "2000+ Kanji characters",
    //     "Native-level comprehension",
    //     "Academic research writing",
    //     "Professional presentations",
    //     "Cultural nuance understanding"
    //   ],
    //   color: "bg-red-100 text-red-800",
    //   difficulty: "Advanced"
    // }
  ];

  return (
    <section id="courses" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Japanese Language Courses</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive JLPT preparation courses designed to take you from beginner to advanced proficiency
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-4 right-4">
                  <Badge className={course.color}>
                    {course.difficulty}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-3xl font-bold text-primary">{course.level}</div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Teaching Method
                    </h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <Button className="w-full mt-6">
                    Enroll Now
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Not sure which level to start with? Take our free placement test!
            </p>
            <Button variant="outline" size="lg">
              Take Placement Test
            </Button>
          </div> */}

          <div className="rounded-2xl py-8 px-0 mt-12">
            <h3 className="text-2xl mb-6 text-center">Why Our Courses are Effective</h3>
                <h4 className="text-lg">① Systematic Practice for Accurate Pronunciation and Writing </h4>
                <p className="text-muted-foreground text-sm">
                Students are trained step by step to master correct pronunciation and proper writing.
                </p>
                <h4 className="text-lg">② Weekly and Monthly Tests for Effective Progress </h4>
                <p className="text-muted-foreground text-sm">
                Regular assessment through weekly and monthly tests helps strengthen understanding and improve performance.
                </p>
                <h4 className="text-lg">③ Simple and Easy-to-Understand Grammar Teaching Methods </h4>
                <p className="text-muted-foreground text-sm">
                Grammar lessons are delivered in a clear, simplified way that makes concepts easy to understand.
                </p>
                <h4 className="text-lg">④ Extra Reading and Listening Practice Beyond the Textbook </h4>
                <p className="text-muted-foreground text-sm">
                In addition to the curriculum, students receive additional materials to improve reading and listening skills.
                </p>
                <h4 className="text-lg">⑤ Training with Old JLPT Questions for Complete Exam Preparation </h4>
                <p className="text-muted-foreground text-sm">
                Practicing past exam questions ensures students are fully prepared and confident for the actual JLPT exam.
                </p>
          </div>
        </div>
      </div>
    </section>
  );
}