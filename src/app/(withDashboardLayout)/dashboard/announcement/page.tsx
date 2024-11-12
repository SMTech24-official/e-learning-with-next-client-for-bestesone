import AnnouncementCard from '@/components/dashboard/AnnouncementCard';
import bannerImage from "@/assets/home/banner.jpg";
import React from 'react';

const AnnouncementPage = () => {
    return (
        <div>
          <h3 className="text-xl font-semibold mb-6">Announcement</h3>
          <div>
          <AnnouncementCard
        teacherName="Brooklyn Simmons"
        teacherTitle="Teacher(Math)"
        postDate="May 21, 12:00 AM"
        content="We're thrilled to share some exciting updates with you! Our team has been hard at work, and we are delighted to introduce the latest features that will enhance your experience. We're thrilled to share some exciting updates with you! Our team has bee"
        imageUrl={bannerImage} 
        category="General"
      />
          </div>
        </div>
    );
};

export default AnnouncementPage;