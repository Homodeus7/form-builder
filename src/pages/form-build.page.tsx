"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Plus } from "lucide-react";
import { ProcessList } from "@/features/process";

export default function FormBuildPage() {
  const [forms, setForms] = useState([
    { id: 1, name: "Contact Form", type: "contact", createdAt: "2025-11-07" },
    {
      id: 2,
      name: "Newsletter Signup",
      type: "newsletter",
      createdAt: "2025-11-06",
    },
  ]);
  const [selectedType, setSelectedType] = useState<string>("");

  const formTypes = [
    { value: "contact", label: "Contact Form" },
    { value: "newsletter", label: "Newsletter Signup" },
    { value: "feedback", label: "Feedback Form" },
    { value: "survey", label: "Survey" },
    { value: "registration", label: "Registration" },
  ];

  const handleAddForm = () => {
    if (!selectedType) return;

    const newForm = {
      id: Math.max(...forms.map((f) => f.id), 0) + 1,
      name:
        formTypes.find((t) => t.value === selectedType)?.label || "New Form",
      type: selectedType,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setForms([...forms, newForm]);
    setSelectedType("");
  };

  const handleDeleteForm = (id: number) => {
    setForms(forms.filter((f) => f.id !== id));
  };

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Forms</h1>
          <p className="text-muted-foreground">Manage and create your forms</p>
        </div>

        {/* Add Form Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Create New Form</CardTitle>
            <CardDescription>Choose a form type to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 items-end">
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">
                  Form Type
                </label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select form type..." />
                  </SelectTrigger>
                  <SelectContent>
                    {formTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={handleAddForm}
                disabled={!selectedType}
                className="gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Form
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Forms List Section */}
        <ProcessList forms={forms} onDelete={handleDeleteForm} />
      </div>
    </main>
  );
}
