import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Heart, MessageCircle, Share2, Calendar } from 'lucide-react';

export function ActivitiesSection() {
  const posts = [
    `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02fWvAd8TzHeqSowwtSDFfwaPpgfJkzatLVYpzQGZhN2o331YAv4kJf7Fdz9dVggCKl%26id%3D100095457399742&show_text=true&width=500"style="border:none;overflow:hidden; width:100%; height:665px;" scrolling="no" frameborder="0" allowfullscreen="true"allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
    `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02L6dgKnFAAsKaG8Z6CmVabhimZRXDEiiVGu9YKcBMF3Cw8WoYFRFKmtN8SiKSMSZAl%26id%3D100095457399742&show_text=true&width=500" width="500" height="812" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
    `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0349Wj7kz8X7js2o31zKZ4PjnwocduXxsmT3rxLxLsJB2SrGcm6Pnq9GDkLUFvdamkl%26id%3D100095457399742&show_text=true&width=500" width="500" height="735" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,
    `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0aCj8PBs423KnrwqBtaH7zoC5k4LSda8UpJSQuzyiv7RTaamV9iwr4xXU79gSXgunl%26id%3D100095457399742&show_text=true&width=500" width="500" height="812" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`
  ];

  return (
    <section id="activities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Latest Activities</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Discover how we support students at every step of their study abroad journey through our activities and programs
            </p>
          </div>

          {/* Use `posts` here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className="w-full bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div
                  className="w-full min-h-[800px]"
                  dangerouslySetInnerHTML={{ __html: post }}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Follow us on social media for daily updates and more content
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Follow on Facebook
              </button>
              <button className="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors">
                Follow on Instagram
              </button>
              <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                Subscribe on YouTube
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
