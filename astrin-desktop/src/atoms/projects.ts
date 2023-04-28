import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

enum ProjectType {
  APP,
  WEBSITE,
  CODE,
  BOTH,
}

interface Project {
  type: ProjectType
  name: string
}

export const ProjectsAtom = atomWithStorage<ProjectType[]>("projects", [])
