import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  MapPin, 
  Briefcase, 
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  GraduationCap,
  Leaf,
  HeartPulse,
  Building2
} from "lucide-react";
import { motion } from "framer-motion";

// Mock user data
const mockUser = {
  name: "Priya Sharma",
  email: "priya.sharma@example.com",
  city: "Mumbai",
  skills: ["Teaching", "Communication", "Tech"],
  interests: ["Education", "Environment"],
  availability: "Weekends",
  profileCompletion: 75,
};

// Mock applied opportunities
const appliedOpportunities = [
  {
    id: 1,
    title: "Teaching English to Underprivileged Children",
    ngo: "Pratham Education Foundation",
    status: "pending",
    appliedOn: "2025-01-28",
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    ngo: "Green Earth Initiative",
    status: "accepted",
    appliedOn: "2025-01-20",
    icon: Leaf,
  },
  {
    id: 3,
    title: "Health Camp Assistant",
    ngo: "Rural Health Mission",
    status: "rejected",
    appliedOn: "2025-01-15",
    icon: HeartPulse,
  },
];

// Mock recommended opportunities
const recommendedOpportunities = [
  {
    id: 4,
    title: "Digital Literacy Program",
    ngo: "Digital India Foundation",
    location: "Mumbai",
    match: 95,
    icon: GraduationCap,
  },
  {
    id: 5,
    title: "Beach Cleanup Drive",
    ngo: "Clean Shores Foundation",
    location: "Mumbai",
    match: 88,
    icon: Leaf,
  },
];

const statusStyles = {
  pending: "bg-saffron-500/10 text-saffron-600",
  accepted: "bg-india-green-100 text-india-green-600",
  rejected: "bg-red-100 text-red-600",
};

const statusIcons = {
  pending: Clock,
  accepted: CheckCircle2,
  rejected: XCircle,
};

const VolunteerDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Welcome back, {mockUser.name.split(" ")[0]}! 👋
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your volunteering journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Completion Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="civic-card p-6 bg-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-foreground">Profile Completion</h2>
                  <span className="text-sm font-medium text-saffron-600">
                    {mockUser.profileCompletion}%
                  </span>
                </div>
                <Progress value={mockUser.profileCompletion} className="h-2 mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  Complete your profile to get better opportunity recommendations.
                </p>
                <Button variant="outline" size="sm">
                  Complete Profile
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>

              {/* Applied Opportunities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="civic-card p-6 bg-card"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-foreground">Applied Opportunities</h2>
                  <Link to="/my-applications" className="text-sm text-saffron-600 hover:text-saffron-700">
                    View all
                  </Link>
                </div>

                <div className="space-y-4">
                  {appliedOpportunities.map((opp) => {
                    const StatusIcon = statusIcons[opp.status as keyof typeof statusIcons];
                    return (
                      <div
                        key={opp.id}
                        className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                          <opp.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="font-medium text-foreground text-sm truncate">
                            {opp.title}
                          </h3>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            {opp.ngo}
                          </p>
                        </div>
                        <div className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 ${statusStyles[opp.status as keyof typeof statusStyles]}`}>
                          <StatusIcon className="w-3 h-3" />
                          {opp.status.charAt(0).toUpperCase() + opp.status.slice(1)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Recommended Opportunities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="civic-card p-6 bg-card"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-foreground">Recommended for You</h2>
                  <Link to="/opportunities" className="text-sm text-saffron-600 hover:text-saffron-700">
                    Browse all
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {recommendedOpportunities.map((opp) => (
                    <div
                      key={opp.id}
                      className="p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-saffron-500 flex items-center justify-center flex-shrink-0">
                          <opp.icon className="w-5 h-5 text-saffron-foreground" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="font-medium text-foreground text-sm line-clamp-2">
                            {opp.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">{opp.ngo}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {opp.location}
                        </span>
                        <span className="badge-green text-xs">
                          {opp.match}% match
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Profile Summary */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="civic-card p-6 bg-card"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                    <User className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h2 className="font-semibold text-foreground text-lg">{mockUser.name}</h2>
                  <p className="text-sm text-muted-foreground">{mockUser.email}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{mockUser.city}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{mockUser.availability}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-sm font-medium text-foreground mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {mockUser.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 bg-secondary rounded-full text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-sm font-medium text-foreground mb-3">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {mockUser.interests.map((interest) => (
                      <span
                        key={interest}
                        className="badge-saffron text-xs"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6">
                  Edit Profile
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="civic-card p-6 bg-card"
              >
                <h3 className="font-semibold text-foreground mb-4">Your Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-secondary/50 rounded-xl">
                    <p className="font-display text-2xl font-bold text-saffron-500">3</p>
                    <p className="text-xs text-muted-foreground">Applied</p>
                  </div>
                  <div className="text-center p-3 bg-secondary/50 rounded-xl">
                    <p className="font-display text-2xl font-bold text-india-green-500">1</p>
                    <p className="text-xs text-muted-foreground">Accepted</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VolunteerDashboard;