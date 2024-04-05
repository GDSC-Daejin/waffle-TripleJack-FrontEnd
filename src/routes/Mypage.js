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
        <p>게시물 승인 , 신청 상태 확인</p>
      </div>

      <div className={`${styles["mypage"]} ${styles["qnaWrap"]}`}>
        <p>자주 묻는 질문</p>
        <div className={styles["qnaInner"]}>운전자가 도망갔어요</div>
        <div className={styles["qnaInner"]}>비밀번호 찾기</div>
      </div>
      <BottomNav />
    </div>
  );
}

export default Mypage;
