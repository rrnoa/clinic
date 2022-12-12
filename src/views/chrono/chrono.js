import { Chrono } from "react-chrono";

const Tempo = () => {
    const items = [{
      title: "3 Janeiro 2020",
      cardTitle: "Consulta incial",
      cardSubtitle:"Motivo: Dor de estomago",
      cardDetailedText: "Examen: al hacer presion sobre la cabidad acdominal...",
    },
    {
        title: "Junio 2000",
        cardTitle: "Motivo: Sed ut perspiciatis unde omnis iste natus error...",
        cardSubtitle:
          "Impressão diagnóstica: SLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        cardDetailedText: ["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti", 
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"],
    },
    {
        title: "Junio 2000",
        cardTitle: "Motivo: Sed ut perspiciatis unde omnis iste natus error...",
        cardSubtitle:
          "Impressão diagnóstica: SLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        cardDetailedText: ["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti", 
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"],
    },{
        title: "Junio 2000",
        cardTitle: "Motivo: Sed ut perspiciatis unde omnis iste natus error...",
        cardSubtitle:
          "Impressão diagnóstica: SLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        cardDetailedText: ["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti", 
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"],
    },{
        title: "Junio 2000",
        cardTitle: "Motivo: Sed ut perspiciatis unde omnis iste natus error...",
        cardSubtitle:
          "Impressão diagnóstica: SLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        cardDetailedText: ["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti", 
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"],
    },{
        title: "Junio 2000",
        cardTitle: "Motivo: Sed ut perspiciatis unde omnis iste natus error...",
        cardSubtitle:
          "Impressão diagnóstica: SLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        cardDetailedText: ["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti", 
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"],
    },{
        title: "Junio 2000",
        cardTitle: "Motivo: Sed ut perspiciatis unde omnis iste natus error...",
        cardSubtitle:
          "Impressão diagnóstica: SLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        cardDetailedText: ["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti", 
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"],
    },{
        title: "Junio 2000",
        cardTitle: "Motivo: Sed ut perspiciatis unde omnis iste natus error...",
        cardSubtitle:
          "Impressão diagnóstica: SLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        cardDetailedText: ["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti", 
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"],
    },{
        title: "Junio 2000",
        cardTitle: "Motivo: Sed ut perspiciatis unde omnis iste natus error...",
        cardSubtitle:
          "Impressão diagnóstica: SLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
        cardDetailedText: ["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti", 
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"],
    }];

    return (
      <div style={{ width: "100%", height: "400px" }}>
        <Chrono items={items} theme={{secondary: "#f9b115" }}/>
      </div>
    )
  }

export default Tempo