'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AdminPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold font-headline mb-8">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Add Course */}
                <Card className="neumorphic-outset">
                    <CardHeader>
                        <CardTitle>Add New Course</CardTitle>
                        <CardDescription>Create a new course to be displayed.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="course-title">Course Title</Label>
                            <Input id="course-title" placeholder="e.g. Python for Beginners" className="neumorphic-inset"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="course-desc">Course Description</Label>
                            <Textarea id="course-desc" placeholder="A brief summary of the course." className="neumorphic-inset"/>
                        </div>
                        <Button className="w-full neumorphic-button">Add Course</Button>
                    </CardContent>
                </Card>
                
                {/* Add Topic */}
                 <Card className="neumorphic-outset">
                    <CardHeader>
                        <CardTitle>Add New Topic</CardTitle>
                        <CardDescription>Add a new topic to an existing course.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="topic-title">Topic Title</Label>
                            <Input id="topic-title" placeholder="e.g. Introduction to Python" className="neumorphic-inset"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="course-select">Course</Label>
                            <select id="course-select" className="w-full p-2 rounded-md neumorphic-inset bg-transparent">
                                <option>Java Fundamentals</option>
                                <option>Python for Beginners</option>
                                <option>Data Structures & Algorithms</option>
                                <option>Full-Stack Web Development</option>
                            </select>
                        </div>
                        <Button className="w-full neumorphic-button">Add Topic</Button>
                    </CardContent>
                </Card>

                {/* Add Sub-Topic */}
                <Card className="neumorphic-outset">
                    <CardHeader>
                        <CardTitle>Add New Sub-Topic</CardTitle>
                        <CardDescription>Add a detailed lesson to a topic.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="subtopic-title">Sub-Topic Title</Label>
                            <Input id="subtopic-title" placeholder="e.g. Python Syntax" className="neumorphic-inset"/>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="topic-select">Topic</Label>
                            <select id="topic-select" className="w-full p-2 rounded-md neumorphic-inset bg-transparent">
                                <option>Introduction to Java</option>
                                <option>Variables and Data Types</option>
                                <option>Introduction to Python</option>
                            </select>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="subtopic-content-en">Content (English)</Label>
                            <Textarea id="subtopic-content-en" placeholder="Lesson content in English." className="neumorphic-inset"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subtopic-content-tl">Content (Tanglish)</Label>
                            <Textarea id="subtopic-content-tl" placeholder="Lesson content in Tanglish." className="neumorphic-inset"/>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="subtopic-code-java">Java Code</Label>
                            <Textarea id="subtopic-code-java" placeholder="```java\n// your code here\n```" className="neumorphic-inset"/>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="subtopic-code-python">Python Code</Label>
                            <Textarea id="subtopic-code-python" placeholder="'''python\n# your code here\n'''" className="neumorphic-inset"/>
                        </div>
                        <Button className="w-full neumorphic-button">Add Sub-Topic</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
