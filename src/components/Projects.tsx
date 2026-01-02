import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'

type ProjectCategory = 'all' | 'development' | 'music' | 'video' | 'graphics'

interface Project {
  title: string
  description: string
  category: ProjectCategory[]
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
      category: ['development'],
      image: '/api/placeholder/600/400',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Beat Production Pack',
      description:
        'Collection of original beats and samples for hip-hop production',
      category: ['music'],
      image: '/api/placeholder/600/400',
      tags: ['Ableton', 'Sound Design', 'Hip-Hop'],
      liveUrl: '#',
    },
    {
      title: 'Mobile App UI/UX',
      description:
        'Modern mobile application interface design with 3D elements',
      category: ['graphics'],
      image: '/api/placeholder/600/400',
      tags: ['Figma', 'Blender', 'UI/UX'],
      liveUrl: '#',
    },
    {
      title: 'Music Video Edit',
      description:
        'Professional music video with motion graphics and color grading',
      category: ['video'],
      image: '/api/placeholder/600/400',
      tags: ['Premiere Pro', 'After Effects'],
      liveUrl: '#',
    },
    {
      title: 'Real-time Chat App',
      description: 'WebSocket-based chat application with file sharing',
      category: ['development'],
      image: '/api/placeholder/600/400',
      tags: ['TypeScript', 'WebSocket', 'Redis'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'DJ Mix Series',
      description: 'Monthly DJ mixes featuring electronic and house music',
      category: ['music'],
      image: '/api/placeholder/600/400',
      tags: ['Traktor', 'House', 'Electronic'],
      liveUrl: '#',
    },
  ]

  const filters: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Development', value: 'development' },
    { label: 'Music', value: 'music' },
    { label: 'Video', value: 'video' },
    { label: 'Graphics', value: 'graphics' },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter))

  return (
    <section id="projects" className="relative py-32 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 neon-text font-mono">
            {'<'} PROJECTS {'>'}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            A showcase of my work across development, music, video, and design
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                // variant={activeFilter === filter.value ? "neon" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className={`font-mono ${activeFilter !== filter.value ? 'border-gray-700 hover:border-neon-cyan' : ''}`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-black/70 backdrop-blur-sm border-gray-800 hover:border-neon-cyan transition-all duration-300 overflow-hidden group h-full">
                {/* Project Image */}
                <div className="relative h-48 bg-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                  <motion.div
                    className="w-full h-full bg-gray-800 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-4xl text-neon-cyan font-mono">
                      IMG
                    </span>
                  </motion.div>
                </div>

                <CardHeader>
                  <CardTitle className="text-neon-cyan font-mono text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-900 text-neon-cyan rounded border border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-gray-700 hover:border-neon-cyan"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        // variant="neon"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
