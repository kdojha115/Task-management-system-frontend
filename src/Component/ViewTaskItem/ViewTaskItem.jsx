// import React from "react";
// import { Component } from "react";


// class ViewTaskItem extends Component{
//     render() {
//       return (
//         <div className='viewTaskItem'>View Task Item</div>   
//       )
//     }
// }

// export default ViewTaskItem;

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lkxoUtBVbpy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { Avatar, AvatarImage, AvatarFallback } from "@/Component/ui/avatar";
// import { Checkbox } from "@/Component/ui/checkbox";
// import { Button } from "@/Component/ui/button";
// import { Switch } from "@/Component/ui/switch";
import Switch from "../ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avtar";
import Button from "../ui/button";
import Checkbox from "../ui/checkbox";


export default function ViewTaskItem() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 lg:p-10">
      <div className="grid gap-8">
        <div className="grid gap-2">
          <h1 className="text-2xl font-bold">Implement new login flow</h1>
          <div className="flex items-center gap-4">
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              In Progress
            </div>
            <div className="text-sm text-muted-foreground">
              Due: <span className="font-medium">June 30, 2024</span>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">Description</h2>
            <div className="text-muted-foreground">
              <p>
                The current login flow is outdated and needs to be updated to provide a better user experience. The new
                flow should include social login options, password reset functionality, and improved error handling.
              </p>
              <p className="mt-4">
                The design team has provided mockups for the new login page, which should be implemented using the
                latest web technologies and best practices.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">Assigned To</h2>
            <div className="flex items-center gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-muted-foreground">Frontend Developer</div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">Comments</h2>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">2 days ago</div>
                  </div>
                  <div className="text-muted-foreground">
                    Looks good! I've added a few more details to the requirements.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">Jane Appleseed</div>
                    <div className="text-sm text-muted-foreground">3 days ago</div>
                  </div>
                  <div className="text-muted-foreground">
                    Great work so far! Let me know if you need any help with the social login integration.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="font-medium">Sarah Mayer</div>
                    <div className="text-sm text-muted-foreground">4 days ago</div>
                  </div>
                  <div className="text-muted-foreground">
                    I've reviewed the design and it looks great. Let's schedule a meeting to discuss the implementation
                    details.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">Subtasks</h2>
            <div className="grid gap-2">
              <div className="flex items-center gap-4">
                <Checkbox id="subtask-1" defaultChecked />
                <div>
                  <div className="font-medium">Implement social login</div>
                  <div className="text-sm text-muted-foreground">
                    Allow users to sign in with Google, Facebook, and Twitter
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Checkbox id="subtask-2" />
                <div>
                  <div className="font-medium">Add password reset functionality</div>
                  <div className="text-sm text-muted-foreground">
                    Allow users to reset their password if they forget it
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Checkbox id="subtask-3" />
                <div>
                  <div className="font-medium">Improve error handling</div>
                  <div className="text-sm text-muted-foreground">Display clear and helpful error messages to users</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Checkbox id="subtask-4" />
                <div>
                  <div className="font-medium">Add attachment option</div>
                  <div className="text-sm text-muted-foreground">Allow users to attach files to the project</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">Collaborators</h2>
            <div className="grid gap-2">
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-muted-foreground">Frontend Developer</div>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <DoorClosedIcon className="w-4 h-4" />
                  <span className="sr-only">Remove collaborator</span>
                </Button>
                
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Jane Appleseed</div>
                  <div className="text-sm text-muted-foreground">Backend Developer</div>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <DoorClosedIcon className="w-4 h-4" />
                  <span className="sr-only">Remove collaborator</span>
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Sarah Mayer</div>
                  <div className="text-sm text-muted-foreground">UI/UX Designer</div>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <DoorClosedIcon className="w-4 h-4" />
                  <span className="sr-only">Remove collaborator</span>
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="w-full">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add Collaborator
                </Button>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <div className="grid gap-2">
              <div className="flex items-center gap-4">
                <MailIcon className="w-6 h-6 text-muted-foreground" />
                <div>
                  <div className="font-medium">Task Assigned</div>
                  <div className="text-sm text-muted-foreground">
                    Receive email notifications when a task is assigned to you
                  </div>
                </div>
                <Switch id="notification-1" defaultChecked />
              </div>
              <div className="flex items-center gap-4">
                <BellIcon className="w-6 h-6 text-muted-foreground" />
                <div>
                  <div className="font-medium">Deadline Approaching</div>
                  <div className="text-sm text-muted-foreground">
                    Receive push notifications when a task is due soon
                  </div>
                </div>
                <Switch id="notification-2" />
              </div>
              <div className="flex items-center gap-4">
                <PaperclipIcon className="w-6 h-6 text-muted-foreground" />
                <div>
                  <div className="font-medium">Attachment</div>
                  <div className="text-sm text-muted-foreground">
                    Receive notifications when a new attachment is added
                  </div>
                </div>
                <Switch id="notification-3" defaultChecked />
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">Attachments</h2>
            <div className="grid gap-2">
              <div className="flex items-center gap-4">
                <PaperclipIcon className="w-6 h-6 text-muted-foreground" />
                <div>
                  <div className="font-medium">Project Proposal.pdf</div>
                  <div className="text-sm text-muted-foreground">Added by John Doe 2 days ago</div>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <DownloadIcon className="w-4 h-4" />
                  <span className="sr-only">Download attachment</span>
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <PaperclipIcon className="w-6 h-6 text-muted-foreground" />
                <div>
                  <div className="font-medium">Design Mockups.zip</div>
                  <div className="text-sm text-muted-foreground">Added by Sarah Mayer 3 days ago</div>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <DownloadIcon className="w-4 h-4" />
                  <span className="sr-only">Download attachment</span>
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="w-full">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add Attachment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function DoorClosedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
      <path d="M2 20h20" />
      <path d="M14 12v.01" />
    </svg>
  )
}


function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PaperclipIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}