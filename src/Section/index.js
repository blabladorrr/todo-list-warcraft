import "./style.css";

const Section = ({ title, body, buttons }) => (
    <section className="section">
        <header className="section__header">
          <h2 className="section__title">{title}</h2>
          {buttons}
        </header>
        <div className="section__body">
            {body}
        </div>
    </section>
);

export default Section;