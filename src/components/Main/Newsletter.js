import css from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={css.newsletter}>
      <h1 className={css.header}>Newsletter</h1>
      <form className={css.form}>
        <input className={css.input} type="text" placeholder="adres email" />
        <button className={css['submit-btn']} type="submit">Subskrybuj</button>
      </form >
      <p className={css.terms}>
        Zarejestruj się, aby otrzymywać najnowsze informacje i aktualności
        bezpośrednio do swojej skrzynki oraz
       <span className={css['terms-span']}> 10% zniżki!</span>
      </p>
    </div>
  );
};

export default Newsletter;
