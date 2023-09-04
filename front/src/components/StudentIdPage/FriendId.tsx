import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectFriend } from "../../utils/atoms";

interface FriendIdComponentProps {
  idx: number;
  friend: number;
}

const FriendIdComponent = styled.div<FriendIdComponentProps>`
  width: 96%;
  height: 30%;
  background-color: #fff;
  position: absolute;
  left: 2%;
  border-radius: 20px;
  border: solid 0.1rem;
  top: ${(props) =>
    props.idx > props.friend ? 25 + props.idx * 7 : props.idx * 7 + 1}%;
`;
interface FriendIdProps {
  friendData: {
    name: string;
    major: string;
    number: number;
    grade: string;
  };
  id: number;
}

const FriendId: React.FC<FriendIdProps> = (props) => {
  const friendData = props.friendData;
  const [friend, setFriend] = useRecoilState(selectFriend);

  const saveFriend = () => {
    if (friend === props.id) {
      setFriend(100);
    } else {
      setFriend(props.id);
    }
  };

  return (
    <FriendIdComponent
      idx={props.id}
      friend={friend}
      onClick={() => saveFriend()}
    >
      <div className="firendName">
        모바일 학생증 {friendData.name}
        {/* 클릭하면 삭제, 카데고리 옮기기 등 옵션 보여주기 */}
        <span>···</span>
      </div>
      <div className="frinedInfo">
        <div>{friendData.name}의 얼굴</div>

        <div>
          <span>{friendData.major}</span>
          <span> </span>
          <span>재학생 ({friendData.grade})</span>
        </div>
        <div>
          <span>{friendData.name} </span>
          <span>{friendData.number}</span>
        </div>
      </div>
    </FriendIdComponent>
  );
};

export default FriendId;
