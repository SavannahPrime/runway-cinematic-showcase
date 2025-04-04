
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Project {
  id: string;
  title: string;
  brand: string;
  location: string;
  date: string;
  thumbnail: string;
  images: string[];
  description: string;
  credits?: string;
  video?: string;
}

interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, className }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {projects.map((project, index) => (
        <div 
          key={project.id}
          className={cn(
            "group cursor-pointer overflow-hidden fade-in",
            `animate-delay-${(index % 3) * 200}`
          )}
          onClick={() => openProject(project)}
        >
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            
            <div className="absolute inset-0 flex items-end p-6">
              <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 p-4 w-full">
                <h3 className="text-xl font-playfair">{project.title}</h3>
                <p className="mt-1 text-sm text-charcoal/70">{project.brand} — {project.location}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Dialog open={!!selectedProject} onOpenChange={() => closeProject()}>
        <DialogContent className="max-w-5xl w-full h-auto max-h-[90vh] p-0 overflow-hidden bg-white">
          {selectedProject && (
            <div className="flex flex-col md:flex-row h-full">
              {/* Image carousel */}
              <div className="relative md:w-2/3 h-[300px] md:h-[80vh]">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation buttons */}
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
                  >
                    &gt;
                  </button>
                </div>
                
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white text-black"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              {/* Project details */}
              <div className="md:w-1/3 p-6 overflow-y-auto">
                <h2 className="text-2xl font-playfair mb-2">{selectedProject.title}</h2>
                <p className="text-sm text-charcoal/70 mb-4">{selectedProject.brand} — {selectedProject.location}</p>
                
                <div className="mb-6">
                  <p className="text-sm mb-4">{selectedProject.description}</p>
                  {selectedProject.credits && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-1">Credits</h4>
                      <p className="text-xs text-charcoal/70">{selectedProject.credits}</p>
                    </div>
                  )}
                </div>
                
                {selectedProject.video && (
                  <div className="mt-6">
                    <h4 className="text-sm font-medium mb-2">Behind the Scenes</h4>
                    <div className="aspect-w-16 aspect-h-9 bg-black/10 flex items-center justify-center">
                      <p className="text-xs text-charcoal/50">Video placeholder</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-xs text-charcoal/50">{selectedProject.date}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectGrid;
