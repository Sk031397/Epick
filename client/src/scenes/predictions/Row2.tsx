import BoxHeader from '@/components/BoxHeader'
import DashboardBox from '@/components/DashboardBox'
import { useGetCSGOQuery } from '@/state/api'
import { useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Funnel, FunnelChart, LabelList, Legend, Line, LineChart, Pie, PieChart, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type Props = {}

const Row2 = (props: Props) => {
  const { palette } = useTheme();
  const { data } = useGetCSGOQuery();;
  const dataQuery = useMemo(()=>{
    return (
      data &&
      data.teams.map((team)=>{
        return {
          name:team.name,
          kills:team.kills,
          killAssistsGiven:team.killAssistsGiven,
          headshots:team.headshots
        }
      })
    )
  },[data])

  return (
    <>
    <DashboardBox  gridArea="d">
      <BoxHeader
      title="Team Assist Given vs Assist Received"
      />
        <ResponsiveContainer width="90%" height="75%">
            <LineChart width={730} height={250} data={dataQuery}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Line type="monotone" dataKey="kills" stroke={palette.primary.main}/>
              <Line type="monotone" dataKey="killAssistsGiven" stroke={palette.primary.main}/>
            </LineChart>
          </ResponsiveContainer>
    </DashboardBox>
    <DashboardBox  gridArea="e">
      <BoxHeader
      title="Team Headshots"/>
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
    <DashboardBox gridArea="e">
    </DashboardBox>
    </>
  )
}

export default Row2