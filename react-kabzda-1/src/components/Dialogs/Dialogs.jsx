import s from './Dialogs.module.css'


const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogs_items}>
            <div className={s.dialog}>Den4ik</div>
            <div className={s.dialog}>Savelik</div>
            <div className={s.dialog}>Ne den4ik</div>
            <div className={s.dialog}>Ne savelik</div>
         </div>
         <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>Gul</div>
            <div className={s.message}>Anime</div>
         </div>

      </div>
   )
}

export default Dialogs