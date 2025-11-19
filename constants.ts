
import type { ChecklistSectionType } from './types';

export const CHECKLIST_DATA: ChecklistSectionType[] = [
  {
    title: 'Phase 1: Pre-Launch (4-6 Weeks Before)',
    description: 'Build momentum and validate your idea before the big day.',
    items: [
      { id: 'pre-1', text: 'Clearly define your target audience and user persona.', done: false },
      { id: 'pre-2', text: 'Set up a compelling landing page with an email signup form.', done: false },
      { id: 'pre-3', text: 'Install analytics (e.g., Google Analytics, Plausible) on your landing page.', done: false },
      { id: 'pre-4', text: 'Create social media profiles on relevant platforms.', done: false },
      { id: 'pre-5', text: 'Write 3-5 foundational blog posts related to your product\'s problem space.', done: false },
      { id: 'pre-6', text: 'Build an initial email list (friends, family, early interests).', done: false },
      { id: 'pre-7', text: 'Engage in 5 niche online communities (subreddits, Facebook groups, Discords).', done: false },
      { id: 'pre-8', text: 'Prepare a press kit (logos, screenshots, founder bios).', done: false },
      { id: 'pre-9', text: 'Identify and build relationships with 10 relevant journalists or influencers.', done: false },
      { id: 'pre-10', text: 'Submit your startup to beta lists and directories (e.g., BetaList, StartupBase).', done: false },
      { id: 'pre-11', text: 'Finalize product pricing and packaging.', done: false },
      { id: 'pre-12', text: 'Set up payment processing (Stripe, Paddle, etc.).', done: false },
    ],
  },
  {
    title: 'Phase 2: Launch Day',
    description: 'Maximize visibility and engagement on the day of your launch.',
    items: [
      { id: 'launch-1', text: 'Submit to Product Hunt at 12:01 AM PST.', done: false },
      { id: 'launch-2', text: 'Announce the launch to your email list.', done: false },
      { id: 'launch-3', text: 'Post launch announcements on all social media channels.', done: false },
      { id: 'launch-4', text: 'Post in your 5 niche online communities about the launch.', done: false },
      { id: 'launch-5', text: 'Personally email your 10 journalist/influencer contacts.', done: false },
      { id: 'launch-6', text: 'Actively engage with comments and feedback on Product Hunt and social media all day.', done: false },
      { id: 'launch-7', text: 'Monitor analytics and server status for any issues.', done: false },
      { id: 'launch-8', text: 'Run a live demo or Q&A session if applicable.', done: false },
      { id: 'launch-9', text: 'Update website banner/hero to reflect "We are live!" message.', done: false },
      { id: 'launch-10', text: 'Thank your first customers and supporters publicly.', done: false },
    ],
  },
  {
    title: 'Phase 3: Post-Launch (First 2 Weeks)',
    description: 'Maintain momentum, gather feedback, and build on your launch success.',
    items: [
      { id: 'post-1', text: 'Send a "Thank You" email to your community and early supporters.', done: false },
      { id: 'post-2', text: 'Write a blog post summarizing the launch experience and results.', done: false },
      { id: 'post-3', text: 'Actively gather user feedback through surveys, emails, and calls.', done: false },
      { id: 'post-4', text: 'Prioritize and fix any critical bugs reported by users.', done: false },
      { id: 'post-5', text: 'Showcase positive reviews and testimonials on your website.', done: false },
      { id: 'post-6', text: 'Continue engaging in online communities, now as a launched product owner.', done: false },
      { id: 'post-7', text: 'Analyze launch data to identify what worked and what didn\'t.', done: false },
      { id: 'post-8', text: 'Plan and announce your first product update based on feedback.', done: false },
      { id: 'post-9', text: 'Set up a system for ongoing customer support.', done: false },
      { id: 'post-10', text: 'Start planning your next marketing push.', done: false },
    ],
  },
];
