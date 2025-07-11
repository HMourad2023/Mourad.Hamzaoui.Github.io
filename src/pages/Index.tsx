import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Database, ChartBar, Github, Linkedin, Mail, Download, ExternalLink, Code, TrendingUp, Users, Award, MapPin, Calendar, Star } from "lucide-react";

const Index = () => {
  const profileData = {
    name: "Mourad Hamzaoui",
    title: "Data Scientist & Spécialiste IA",
    location: "Laval, Canada",
    bio: "Développeur Python et Spécialiste en IA, expert en science des données, architecture logicielle et automatisation. Je conçois et déploie des workflows de données de bout en bout, optimisés pour la performance, la réutilisabilité et l'intégration de modèles avancés. Spécialisé dans le traitement de données non structurées, le streaming en temps réel et les bibliothèques Python modulaires.",
    social: {
      linkedin: "https://www.linkedin.com/in/mourad-hamzaoui",
      github: "#",
      kaggle: "https://www.kaggle.com/hamzaouimourad"
    }
  };

  const skills = {
    "Langages & Frameworks": ["Python", "SQL", "HTML5", "JavaScript", "R"],
    "Machine Learning": ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "XGBoost"],
    "IA & Automatisation": ["CrewAI", "LangChain", "LangGraph", "LangFlow", "Agno", "AutoGen"],
    "Cloud & Data": ["AWS", "GCP", "Azure", "Databricks", "Azure SQL", "MongoDB", "ChromaDB"],
    "DevOps & Infrastructure": ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Azure DevOps"],
    "Analytics & Visualization": ["Power BI", "Tableau", "Plotly", "Streamlit"]
  };

  const projects = [
    {
      title: "Traitement en Temps Réel des Données de Vol",
      description: "Pipeline de données temps réel pour l'ingestion et le traitement de données simulées de capteurs de vol avec Spark Structured Streaming.",
      technologies: ["Python", "Databricks", "Azure Event Hubs", "Delta Lake"],
      category: "Data Engineering",
      status: "Complété",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Pipeline CI/CD pour Workflows Data Engineering",
      description: "Infrastructure en tant que code avec Terraform et configuration de pipelines Azure DevOps pour le déploiement continu des notebooks Databricks.",
      technologies: ["Azure DevOps", "GitHub", "Databricks Repos", "Python", "Terraform"],
      category: "MLOps",
      status: "En cours",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Infrastructure Cloud-Native pour l'Ingestion de Données",
      description: "Déploiement automatisé d'une infrastructure cloud d'ingestion de données avec Terraform et modèles ARM.",
      technologies: ["Terraform", "ARM", "Azure Storage", "Azure Functions"],
      category: "Cloud Architecture",
      status: "Complété",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Tableau de Bord Satisfaction Client avec Python & Power BI",
      description: "Création d'un tableau de bord interactif de visualisation de données de satisfaction client avec Python pour le prétraitement et Power BI pour le reporting.",
      technologies: ["Python", "Power BI", "Scikit-learn", "Visualisation"],
      category: "Analytics",
      status: "Complété",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Projet Complet de Cycle de Vie Machine Learning",
      description: "Projet ML complet du notebook à la production avec MLOps, DVC, et déploiement automatisé.",
      technologies: ["Python", "Scikit-learn", "PyTorch", "DVC", "MLflow", "Docker", "Kubernetes"],
      category: "Machine Learning",
      status: "Complété",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Plateforme d'Automatisation IA Agentique",
      description: "Plateforme d'automatisation utilisant l'IA agentique avec CrewAI et LangGraph pour des workflows autonomes.",
      technologies: ["Python", "CrewAI", "LangGraph", "LangChain", "MLflow", "Docker", "Supabase"],
      category: "IA Agentique",
      status: "En développement",
      image: "/api/placeholder/400/250"
    }
  ];

  const achievements = [
    { icon: Star, label: "Projets Déployés", value: "15+" },
    { icon: TrendingUp, label: "Précision Modèles", value: "95%" },
    { icon: Users, label: "Équipes Menées", value: "5" },
    { icon: Award, label: "Certifications", value: "12" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Profile Card */}
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold mb-1">{profileData.name}</h1>
                  <p className="text-primary font-medium mb-2">{profileData.title}</p>
                  <div className="flex items-center justify-center text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {profileData.location}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Code className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="w-full" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger CV
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">À Propos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {profileData.bio}
                </p>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Réalisations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <achievement.icon className="w-6 h-6 mx-auto mb-1 text-primary" />
                      <div className="text-lg font-bold text-primary">{achievement.value}</div>
                      <div className="text-xs text-muted-foreground">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Skills Section */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Compétences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, skillList], index) => (
                    <div key={index}>
                      <h3 className="font-semibold mb-3 text-primary">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects Section */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Projets</CardTitle>
                <CardDescription>
                  Une sélection de mes projets les plus significatifs en data science et IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {projects.map((project, index) => (
                    <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {project.category}
                              </Badge>
                              <Badge 
                                variant={project.status === "Complété" ? "default" : "secondary"} 
                                className="text-xs"
                              >
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="mt-3">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} className="text-xs bg-gradient-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            Voir Détails
                          </Button>
                          <Button size="sm" variant="outline">
                            <Github className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
