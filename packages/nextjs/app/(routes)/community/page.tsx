import React from 'react';
import { Trophy, Users, Calendar, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~~/components/ui/card";
import { Button } from "~~/components/ui/button";
import { Badge } from "~~/components/ui/badge";
import Link from 'next/link';

const CommunityPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-4">Community</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { value: "15,000+", label: "Active Players" },
          { value: "500+", label: "Teams Registered" },
          { value: "$50K+", label: "Prize Pool" }
        ].map((stat, index) => (
          <Card key={index} className="bg-[#1a1b4b] border-[#2a2b5b]">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-[#1a1b4b] border-[#2a2b5b]">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Users className="w-6 h-6 text-green-500 mr-2" />
              Teams & Guilds
            </CardTitle>
            <CardDescription className="text-gray-300">
              Join forces with other players or create your own team. Compete in tournaments and climb the rankings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/teams/new">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Register Your Team
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-[#1a1b4b] border-[#2a2b5b]">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Trophy className="w-6 h-6 text-green-500 mr-2" />
              Tournaments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Winter Championship", prize: "$20,000", status: "Registrations Open", statusColor: "text-green-500" },
              { name: "Weekly Challenge", prize: "$5,000", status: "Starting Soon", statusColor: "text-yellow-500" }
            ].map((tournament, index) => (
              <Card key={index} className="bg-[#141538] border-[#2a2b5b]">
                <CardContent className="p-4">
                  <div className="text-white font-bold">{tournament.name}</div>
                  <div className="text-gray-400">Prize Pool: {tournament.prize}</div>
                  <div className={tournament.statusColor}>{tournament.status}</div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-[#1a1b4b] border-[#2a2b5b]">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Calendar className="w-6 h-6 text-green-500 mr-2" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {['Community Meetup', 'Game Night', 'Strategy Workshop'].map((event, index) => (
              <Card key={index} className="bg-[#141538] border-[#2a2b5b]">
                <CardContent className="flex items-center justify-between p-3">
                  <span className="text-white">{event}</span>
                  <Badge variant="secondary" className="bg-blue-900 text-gray-300">
                    in {index + 2} days
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-[#1a1b4b] border-[#2a2b5b]">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <BookOpen className="w-6 h-6 text-green-500 mr-2" />
              Guides & Resources
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              'Beginner\'s Guide to Starknet Gaming',
              'Advanced Tournament Strategies',
              'Team Building Tips'
            ].map((guide, index) => (
              <Card key={index} className="bg-[#141538] border-[#2a2b5b]">
                <CardContent className="p-3">
                  <div className="text-white">{guide}</div>
                  <div className="text-sm text-gray-400">By Community Leaders</div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CommunityPage;