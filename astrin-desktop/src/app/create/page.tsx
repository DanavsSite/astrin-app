"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function createProject() {}

export default function Create() {
  const [name, setName] = useState("")
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <Card className="p-10 scale-[1.3] flex flex-col items-center gap-4">
          <h1 className="text-xl">Create New Project</h1>
          <div className="w-full">
            <Label htmlFor="name">Name:</Label>
            <Input
              onChange={(e) => {
                setName(e.target.value)
              }}
              type="name"
              id="name"
              placeholder="My COol App"
            />
          </div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Project Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Choose a Project Type</SelectLabel>
                <SelectItem value="app">App</SelectItem>
                <SelectItem value="website">Website</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="mr-1" /> Create Project
          </Button>
        </Card>
      </div>
    </>
  )
}
