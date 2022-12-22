import { Box, Typography } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = ({ data }) => {
  console.log(data);
  return (
    <Box flex={4} p={2}>
      {data.length === 0 ? (
        <Typography textAlign="center" height={100} lineHeight={40}>
          😀 피드가 존재하지 않습니다 ⚠️ 피드를 작성해주세요!!
        </Typography>
      ) : (
        data.map((data) => (
          <Post
            key={data.feedCode}
            memberName={data.memberEmail.memberName}
            feedDate={data.feedDate}
            feedContent={data.feedContent}
            file={data.ffList}
            memberEmail={data.memberEmail.memberEmail} //post로 email 넘기려고 추가함
          />
        ))
      )}
    </Box>
  );
};

export default Feed;
