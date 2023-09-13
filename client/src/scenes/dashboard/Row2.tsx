import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import { useGetCSGOQuery } from '@/state/api'
import { useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Funnel, FunnelChart, LabelList, Legend, Line, LineChart, Pie, PieChart, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type Props = {}

const Row2 = (props: Props) => {
  const { palette } = useTheme();
  const { data } = useGetCSGOQuery();
  //console.log(data);
  const dataQuery = useMemo(()=>{
    return (
      data &&
      data.teams.map((team)=>{
        return {
          name:team.name,
          kills:team.kills,
          deaths:team.deaths,
          headshots:team.headshots,
        }
      })
    )
  },[data])

  return (
    <>
    <DashboardBox  gridArea="d">
      <BoxHeader
      title="Team Kills vs Deaths"
      />
      <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={dataQuery}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
              domain={[0, 50]}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="kills"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="deaths"
              dot={true}
              stroke={palette.primary.light}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
    </DashboardBox>
    <DashboardBox  gridArea="e">
      <BoxHeader
      title="Team Headshots"/>
      <ResponsiveContainer width="100%" height="70%">
        <BarChart width={730} height={250} data={dataQuery}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="headshots" fill={palette.primary.dark} />
        </BarChart>
        </ResponsiveContainer>
    </DashboardBox>
    </>
  )
}

export default Row2