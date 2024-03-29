import TopNav from "../component/topNav";
import styles from "../routes/Mypage.module.css";
import BottomNav from "../component/bottomNav";
function Mypage() {
  return (
    <div className="contentWrap">
      <TopNav />
      <div className={styles["mypage"]}>
        <p>사용자 이름</p>
        <p>학번</p>
      </div>

      <div className={styles["mypage"]}>
        <b>나의여정</b>
        <p>
          마이페이지 들가면 쿠키 전송하면 학번에 해당하는 게시물 온거 여기
          렌더링
        </p>
      </div>

      <div className={`${styles["mypage"]} ${styles["qnaWrap"]}`}>
        <p>자주 묻는 질문</p>
        <div className={styles["qnaInner"]}>asd</div>
        <div className={styles["qnaInner"]}>asd</div>
      </div>
      <BottomNav />
    </div>
  );
}

export default Mypage;
