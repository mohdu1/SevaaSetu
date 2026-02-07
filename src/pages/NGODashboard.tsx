import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  MapPin, 
  Users,
  Plus,
  Eye,
  UserCheck,
  UserX,
  Clock,
  ArrowRight,
  Briefcase,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";

// Mock NGO data
const mockNGO = {
  name: "Pratham Education Foundation",
  description: "Empowering children through quality education since 1995.",
  category: "Education",
  city: "Mumbai, Maharashtra",
  registrationId: "NGO-MH-2024-1234",
  verified: true,
};

// Mock posted opportunities
const postedOpportunities = [
  {
    id: 1,
    title: "Teaching English to Underprivileged Children",
    applicants: 12,
    accepted: 3,
    pending: 7,
    rejected: 2,
    postedOn: "2025-01-20",
  },
  {
    id: 2,
    title: "Weekend Tutoring Program",
    applicants: 8,
    accepted: 2,
    pending: 5,
    rejected: 1,
    postedOn: "2025-01-25",
  },
  {
    id: 3,
    title: "Digital Literacy Camp",
    applicants: 5,
    accepted: 0,
    pending: 5,
    rejected: 0,
    postedOn: "2025-02-01",
  },
];

// Mock recent applicants
const recentApplicants = [
  {
    id: 1,
    name: "Rahul Verma",
    opportunity: "Teaching English",
    skills: ["Teaching", "Communication"],
    status: "pending",
    appliedOn: "2025-02-03",
  },
  {
    id: 2,
    name: "Sneha Patel",
    opportunity: "Weekend Tutoring",
    skills: ["Tutoring", "Math"],
    status: "pending",
    appliedOn: "2025-02-02",
  },
  {
    id: 3,
    name: "Amit Kumar",
    opportunity: "Digital Literacy",
    skills: ["Tech", "Training"],
    status: "pending",
    appliedOn: "2025-02-01",
  },
];

const NGODashboard = () => {
  const totalApplicants = postedOpportunities.reduce((sum, opp) => sum + opp.applicants, 0);
  const totalAccepted = postedOpportunities.reduce((sum, opp) => sum + opp.accepted, 0);
  const totalPending = postedOpportunities.reduce((sum, opp) => sum + opp.pending, 0);

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
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                NGO Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage your opportunities and connect with volunteers
              </p>
            </div>
            <Button variant="saffron" size="lg">
              <Plus className="w-5 h-5" />
              Post New Opportunity
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="civic-card p-5 bg-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">{postedOpportunities.length}</p>
              <p className="text-sm text-muted-foreground">Posted Opportunities</p>
            </div>
            <div className="civic-card p-5 bg-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-saffron-500/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-saffron-600" />
                </div>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">{totalApplicants}</p>
              <p className="text-sm text-muted-foreground">Total Applicants</p>
            </div>
            <div className="civic-card p-5 bg-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-india-green-100 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-india-green-600" />
                </div>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">{totalAccepted}</p>
              <p className="text-sm text-muted-foreground">Accepted</p>
            </div>
            <div className="civic-card p-5 bg-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">{totalPending}</p>
              <p className="text-sm text-muted-foreground">Pending Review</p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Posted Opportunities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="civic-card p-6 bg-card"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-foreground">Your Opportunities</h2>
                  <Link to="/ngo/opportunities" className="text-sm text-saffron-600 hover:text-saffron-700">
                    View all
                  </Link>
                </div>

                <div className="space-y-4">
                  {postedOpportunities.map((opp) => (
                    <div
                      key={opp.id}
                      className="p-4 bg-secondary/50 rounded-xl"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-medium text-foreground">{opp.title}</h3>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          {opp.applicants} applicants
                        </span>
                        <span className="flex items-center gap-1 text-india-green-600">
                          <UserCheck className="w-4 h-4" />
                          {opp.accepted} accepted
                        </span>
                        <span className="flex items-center gap-1 text-saffron-600">
                          <Clock className="w-4 h-4" />
                          {opp.pending} pending
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recent Applicants */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="civic-card p-6 bg-card"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-foreground">Recent Applicants</h2>
                  <Link to="/ngo/applicants" className="text-sm text-saffron-600 hover:text-saffron-700">
                    View all
                  </Link>
                </div>

                <div className="space-y-4">
                  {recentApplicants.map((applicant) => (
                    <div
                      key={applicant.id}
                      className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-sm font-medium text-primary-foreground">
                            {applicant.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground text-sm">{applicant.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            Applied for: {applicant.opportunity}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="success" size="sm">
                          <UserCheck className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <UserX className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - NGO Profile */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="civic-card p-6 bg-card"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary mx-auto mb-4 flex items-center justify-center">
                    <Building2 className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h2 className="font-semibold text-foreground text-lg">{mockNGO.name}</h2>
                    {mockNGO.verified && (
                      <Shield className="w-5 h-5 text-india-green-500" />
                    )}
                  </div>
                  {mockNGO.verified && (
                    <span className="badge-green text-xs">Verified NGO</span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground text-center mb-6">
                  {mockNGO.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{mockNGO.city}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{mockNGO.category}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-1">Registration ID</p>
                  <p className="text-sm font-mono text-foreground">{mockNGO.registrationId}</p>
                </div>

                <Button variant="outline" className="w-full mt-6">
                  Edit Profile
                </Button>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="civic-card p-6 bg-card"
              >
                <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="saffron" className="w-full justify-start">
                    <Plus className="w-4 h-4" />
                    Post New Opportunity
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4" />
                    View All Applicants
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Briefcase className="w-4 h-4" />
                    Manage Opportunities
                  </Button>
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

export default NGODashboard;