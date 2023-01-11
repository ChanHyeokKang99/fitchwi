import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeTogetherList = ({ category, togetherList, korCategory, type }) => {
  console.log(togetherList);
  const [togetherListByCategory, setTogetherListCategory] = useState();
  const nav = useNavigate();

  useEffect(() => {
    try {
      if (type === "recent") {
        setTogetherListCategory(togetherList.filter((data) => data.togetherCategory === korCategory));
      } else {
        setTogetherListCategory(togetherList.filter((data) => data.togetherCategory === korCategory));
      }
    } catch (e) {}
  }, [korCategory, togetherList, type]);

  if (togetherListByCategory !== undefined) {
    togetherListByCategory.length = 4;
  }

  return (
    <>
      {togetherListByCategory === undefined ? (
        <Box>로딩중</Box>
      ) : (
        <>
          <Stack direction="row" spacing={5} alignItems="flex-start" justifyContent="space-between" mt={10}>
            {type === "recent" ? (
              <Typography variant="h5">👾 최신 함께해요</Typography>
            ) : (
              <Typography variant="h5">🤡 추천 함께해요</Typography>
            )}
            <Button onClick={() => nav(`/together/category/${category}`)}>전체보기</Button>
          </Stack>
          <Stack direction="row" spacing={3} alignItems="flex-start" justifyContent="space-between" mt={1}>
            {togetherListByCategory.map((item) => (
              <Link to={`/together/${item.togetherCode}`} style={{ textDecoration: "none" }} key={item.togetherCode}>
                <Card sx={{ mb: 3, width: 250, height: 235 }} key={item.togetherCode}>
                  <CardActionArea>
                    <CardMedia component="img" width="200" height="150" alt="talkimg" src={`/images/${item.togetherSaveimg}`} />
                    <CardContent>
                      <Typography variant="h6" fontWeight={100}>
                        {item.togetherTitle}
                      </Typography>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="caption">{item.togetherDate}</Typography>
                        <Typography variant="button" fontWeight={100}>
                          {item.togetherPosition}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            ))}
          </Stack>
        </>
      )}
    </>
  );
};

export default HomeTogetherList;
