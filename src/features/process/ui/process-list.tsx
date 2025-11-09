"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Trash2, Eye } from "lucide-react";
import { FormBuilder } from "../form-builder";

interface Process {
  id: number;
  name: string;
  type: string;
  createdAt: string;
}

interface ProcessListProps {
  forms: Process[];
  onDelete: (id: number) => void;
}

export function ProcessList({ forms, onDelete }: ProcessListProps) {
  if (forms.length === 0) {
    return (
      <Card className="border-dashed">
        <CardContent className="pt-8">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              No forms yet. Create your first form to get started!
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      <h2 className="text-xl font-semibold">Your Forms</h2>
      <div className="grid gap-3">
        {forms.map((form) => (
          <Card key={form.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{form.name}</CardTitle>
                  <CardDescription>
                    Created on {form.createdAt} • Type: {form.type}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(form.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <FormBuilder
                config={{
                  fields: [
                    {
                      id: "1",
                      name: "sampleText",
                      label: "Sample Text",
                      type: "text",
                      required: false,
                      placeholder: "Enter text here",
                    },
                  ],
                }}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
