"use client"

import { Link } from "next/link"
import { useRouter } from "next/navigation"
import { Code, DownloadCloud, Plus } from "lucide-react"
import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import "../styles/button.css"

export default function App() {
  const router = useRouter()
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <Card className="p-10 scale-[1.3] flex flex-col items-center gap-4">
          <h1 className="text-xl">Welcome to Astrin!</h1>
          <button
            onClick={() => router.push("/create")}
            className="glow-on-hover"
          >
            <Plus className="mr-1" /> Create New Project
          </button>
          <Button className="w-full h-[50px]">
            <DownloadCloud className="mr-1" /> Import From URL
          </Button>
          <Button className="w-full h-[50px]" variant="secondary">
            <Code className="mr-1" /> Create Code Project
          </Button>
        </Card>
      </div>
    </>
  )
}
