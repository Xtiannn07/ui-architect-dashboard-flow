import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const steps = [
  {
    title: "About Me",
    fields: ["First Name", "Last Name", "Company", "Email", "Password"]
  },
  {
    title: "Address",
    fields: ["Address 1", "Address 2", "City", "State", "Zip"]
  },
  {
    title: "Socials",
    fields: ["Twitter", "Facebook", "Instagram"]
  },
  {
    title: "Profile",
    fields: ["Public Email", "Bio"]
  }
];

const NewUser = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">New User</h1>

      {/* Progress Steps */}
      <div className="flex justify-between relative mb-8">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-700 -translate-y-1/2"></div>
        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center
              ${index <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-slate-200 dark:bg-slate-700'}`}>
              {index < currentStep ? <Check size={16} /> : index + 1}
            </div>
            <span className="mt-2 text-sm font-medium">{step.title}</span>
          </div>
        ))}
      </div>

      {/* Form Card */}
      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {steps[currentStep].fields.map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-1">{field}</label>
                <Input 
                  type={field.toLowerCase().includes('password') ? 'password' : 
                        field.toLowerCase().includes('email') ? 'email' : 'text'} 
                  placeholder={`Enter your ${field.toLowerCase()}`}
                />
              </div>
            ))}

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              <Button
                onClick={currentStep === steps.length - 1 ? () => console.log('Submit') : nextStep}
              >
                {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewUser;