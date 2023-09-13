import React, { useMemo,useEffect,useState } from 'react'
import DashboardBox from '@/components/DashboardBox'
import { useGetCSGOQuery } from '@/state/api'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { MenuItem, Select, useTheme } from '@mui/material'
import BoxHeader from "@/components/BoxHeader";


const Row1 = () => {
  const { palette } = useTheme();
  const { data } = useGetCSGOQuery();
  const dataQuery = useMemo(()=>{
    return (
      data &&
      data.teams[0].players.map((player)=>{
        return {
          name:player.name,
          kills:player.kills,
          deaths:player.deaths,
          headshots:player.headshots,
          killAssistGiven:player.killAssistsGiven,
          killAssistReceived:player.killAssistsReceived
        }
      })
    )
  },[data])
  return (
    <>
      <DashboardBox gridArea="a">
        <BoxHeader
        title="Player Kills vs Player Deaths"
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
              stroke={palette.primary.dark}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox  gridArea="b">
      <BoxHeader
        title="Player Headshots"
        />
        <ResponsiveContainer width="100%" height="90%">
        <BarChart width={730} height={250} data={dataQuery}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="headshots" fill={palette.primary.dark} />
        </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox  gridArea="c">
          <BoxHeader
          title="Assists Given vs Assists Received"/> 
          <ResponsiveContainer width="90%" height="75%">
            <LineChart width={730} height={250} data={dataQuery}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Line type="monotone" dataKey="killAssistGiven" stroke={palette.primary.main}/>
              <Line type="monotone" dataKey="killAssistReceived" stroke={palette.primary.main}/>
            </LineChart>
          </ResponsiveContainer>
      </DashboardBox>
    </>
  )
}

export default Row1