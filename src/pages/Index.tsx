import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Database, ChartBar, Github, Linkedin, Mail, Download, ExternalLink, Code, TrendingUp, Users, Award } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "Système de Recommandation ML",
      description: "Algorithme de machine learning pour recommandations personnalisées utilisant Python, TensorFlow et Apache Spark.",
      technologies: ["Python", "TensorFlow", "Apache Spark", "Pandas"],
      link: "#",
      github: "#"
    },
    {
      title: "Analyse Prédictive des Ventes",
      description: "Modèle de deep learning pour prédire les tendances de vente avec une précision de 95%.",
      technologies: ["Python", "PyTorch", "Scikit-learn", "Plotly"],
      link: "#",
      github: "#"
    },
    {
      title: "Pipeline ETL Automatisé",
      description: "Architecture de données moderne avec ingestion automatisée et transformation en temps réel.",
      technologies: ["Apache Airflow", "Docker", "PostgreSQL", "AWS"],
      link: "#",
      github: "#"
    }
  ];

  const skills = [
    { category: "Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"] },
    { category: "Langages", items: ["Python", "R", "SQL", "JavaScript"] },
    { category: "Data Engineering", items: ["Apache Spark", "Airflow", "Docker", "Kubernetes"] },
    { category: "Cloud & Analytics", items: ["AWS", "GCP", "Tableau", "Power BI"] }
  ];

  const stats = [
    { icon: Code, label: "Projets Complétés", value: "25+" },
    { icon: TrendingUp, label: "Précision Modèles", value: "95%" },
    { icon: Users, label: "Collaborations", value: "15+" },
    { icon: Award, label: "Certifications", value: "8" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center">
              <Brain className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Data Scientist & IA Specialist
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionné par l'intelligence artificielle et l'analyse de données, je transforme les données complexes en insights exploitables pour stimuler l'innovation.
            </p>
            <div className="flex gap-4 justify-center mb-8">
              <Button size="lg" className="shadow-elegant">
                <Download className="mr-2 h-4 w-4" />
                Télécharger CV
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Me Contacter
              </Button>
            </div>
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" size="sm">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projets Phares</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Compétences Techniques</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    {skillGroup.category === "Machine Learning" && <Brain className="mr-2 h-5 w-5 text-primary" />}
                    {skillGroup.category === "Data Engineering" && <Database className="mr-2 h-5 w-5 text-primary" />}
                    {skillGroup.category === "Cloud & Analytics" && <ChartBar className="mr-2 h-5 w-5 text-primary" />}
                    {skillGroup.category === "Langages" && <Code className="mr-2 h-5 w-5 text-primary" />}
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-gradient-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Collaborer?</h2>
          <p className="text-muted-foreground mb-8">
            Je suis toujours ouvert aux nouvelles opportunités et collaborations passionnantes dans le domaine de la data science et de l'IA.
          </p>
          <Button size="lg" className="shadow-elegant">
            <Mail className="mr-2 h-4 w-4" />
            Commençons un Projet
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
