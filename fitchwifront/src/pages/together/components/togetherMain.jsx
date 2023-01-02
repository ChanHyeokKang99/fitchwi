import React from "react";
import { Box, Typography } from "@mui/material";
import Together from "./together";

const TogetherMain = ({togetherList}) => {
    return (
        <Box flex={4} p={2}>
            {togetherList.filter(data=> data.togetherState!=="삭제신청중").length === 0  ? <Typography textAlign="center" height={100} lineHeight={40}>
          😀 현재 진행중인 함께해요가 없습니다</Typography> : togetherList.filter(data=> data.togetherState!=="삭제신청중").map((data) => (            
            <Together togetherList={data} key={data.togetherCode}/>
            ))}  
        </Box>
    )
}
export default TogetherMain;