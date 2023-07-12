import { Divider, Progress, Stack } from "@chakra-ui/react";

import { DivProgressBar } from "./styles";

export function StatsGrafic({ pokemonStats }) {
  let total = 0;

  return pokemonStats?.map(({ stat, base_stat }, index) => {
    total += Number(base_stat);

    const progressColor = Number(base_stat) > 50 ? "yellow" : "orange";

    if (index === pokemonStats?.length - 1) {
      return (
        <>
          <Stack direction="row" w="xs" p={4}>
            <Divider orientation="horizontal" />
          </Stack>

          <DivProgressBar>
            <p>Total</p>

            <strong>{total}</strong>

            <Progress value={base_stat} colorScheme="white" w="xs" width="48" />
          </DivProgressBar>
        </>
      );
    }
    return (
      <>
        <Stack direction="row" w="xs" p={4}>
          <Divider orientation="horizontal" />
        </Stack>

        <DivProgressBar>
          <p>{stat?.name}</p>

          <strong>{base_stat}</strong>

          <Progress
            value={base_stat}
            colorScheme={progressColor}
            w="xs"
            width="48"
          />
        </DivProgressBar>
      </>
    );
  });
}
