# Entur netex-validator-java rules

* [AUTHORITY_1](authority_1.md) - Authority missing CompanyNumber
* [AUTHORITY_2](authority_2.md) - Authority missing Name
* [AUTHORITY_3](authority_3.md) - Authority missing LegalName
* [AUTHORITY_4](authority_4.md) - Authority missing ContactDetails
* [AUTHORITY_5](authority_5.md) - Authority missing Url for ContactDetails
* [BLOCK_1](block_1.md) - Block missing VehicleScheduleFrame
* [BLOCK_2](block_2.md) - Block missing Journey
* [BLOCK_3](block_3.md) - Block missing DayType
* [BOOKING_4](booking_4.md) - Booking property
* [BOOKING_5](booking_5.md) - Missing BookWhen or MinimumBookingPeriod
* [COMPOSITE_FRAME_1](composite_frame_1.md) - CompositeFrame - missing ValidityCondition
* [COMPOSITE_FRAME_2](composite_frame_2.md) - CompositeFrame - invalid nested ValidityCondition
* [COMPOSITE_FRAME_3](composite_frame_3.md) - CompositeFrame - missing ValidBetween
* [COMPOSITE_FRAME_4](composite_frame_4.md) - CompositeFrame - invalid ValidBetween
* [COMPOSITE_FRAME_5](composite_frame_5.md) - CompositeFrame - invalid AvailabilityCondition
* [COMPOSITE_FRAME_6](composite_frame_6.md) - CompositeFrame - missing AvailabilityCondition
* [COMPOSITE_FRAME_SITE_FRAME](composite_frame_site_frame.md) - CompositeFrame - unexpected SiteFrame
* [COMPOSITE_TIMETABLE_FRAME_IN_COMMON_FILE](composite_timetable_frame_in_common_file.md) - CompositeFrame - Illegal TimetableFrame in common file
* [DATED_SERVICE_JOURNEY_1](dated_service_journey_1.md) - DatedServiceJourney missing OperatingDayRef
* [DATED_SERVICE_JOURNEY_2](dated_service_journey_2.md) - DatedServiceJourney missing ServiceJourneyRef
* [DATED_SERVICE_JOURNEY_3](dated_service_journey_3.md) - DatedServiceJourney multiple ServiceJourneyRef
* [DATED_SERVICE_JOURNEY_4](dated_service_journey_4.md) - DatedServiceJourney multiple versions
* [DATED_SERVICE_JOURNEY_5](dated_service_journey_5.md) - DatedServiceJourney multiple references to the same DatedServiceJourney
* [DEAD_RUN_1](dead_run_1.md) - DeadRun missing PassingTime references
* [DEAD_RUN_2](dead_run_2.md) - DeadRun missing JourneyPattern references
* [DEAD_RUN_3](dead_run_3.md) - DeadRun missing DayType references
* [DESTINATION_DISPLAY_1](destination_display_1.md) - DestinationDisplay missing FrontText
* [DESTINATION_DISPLAY_2](destination_display_2.md) - DestinationDisplay missing DestinationDisplayRef on Via
* [FLEXIBLE_LINE_1](flexible_line_1.md) - FlexibleLine missing FlexibleLineType
* [FLEXIBLE_LINE_10](flexible_line_10.md) - FlexibleLine illegal use of both BookWhen and MinimumBookingPeriod
* [FLEXIBLE_LINE_11](flexible_line_11.md) - FlexibleLine BookWhen without LatestBookingTime or LatestBookingTime without BookWhen
* [FLEXIBLE_SERVICE_1](flexible_service_1.md) - FlexibleService missing Id on FlexibleServiceProperties
* [FLEXIBLE_SERVICE_2](flexible_service_2.md) - FlexibleService missing version on FlexibleServiceProperties
* [FLEXIBLE_SERVICE_3](flexible_service_3.md) - FlexibleService illegal use of both BookWhen and MinimumBookingPeriod
* [FLEXIBLE_SERVICE_4](flexible_service_4.md) - FlexibleService BookWhen without LatestBookingTime or LatestBookingTime without BookWhen
* [INTERCHANGE_1](interchange_1.md) - Interchange invalid properties
* [INTERCHANGE_2](interchange_2.md) - Interchange unexpected MaximumWaitTime
* [INTERCHANGE_3](interchange_3.md) - Interchange excessive MaximumWaitTime
* [JOURNEY_PATTERN_1](journey_pattern_1.md) - JourneyPattern illegal element ServiceJourneyPattern
* [JOURNEY_PATTERN_2](journey_pattern_2.md) - JourneyPattern missing JourneyPattern
* [JOURNEY_PATTERN_3](journey_pattern_3.md) - JourneyPattern missing RouteRef
* [JOURNEY_PATTERN_4](journey_pattern_4.md) - JourneyPattern missing DestinationDisplayRef on first stop point
* [JOURNEY_PATTERN_5](journey_pattern_5.md) - JourneyPattern illegal DestinationDisplayRef on last stop point
* [JOURNEY_PATTERN_6](journey_pattern_6.md) - JourneyPattern stop point without boarding or alighting
* [JOURNEY_PATTERN_7](journey_pattern_7.md) - JourneyPattern illegal repetition of DestinationDisplay
* [JOURNEY_PATTERN_8](journey_pattern_8.md) - JourneyPattern  illegal use of both BookWhen and MinimumBookingPeriod
* [JOURNEY_PATTERN_9](journey_pattern_9.md) - JourneyPattern  BookWhen without LatestBookingTime or LatestBookingTime without BookWhen
* [LINE_1](line_1.md) - Line - exactly one Line or FlexibleLine
* [LINE_2](line_2.md) - Line missing Name
* [LINE_3](line_3.md) - Line missing PublicCode
* [LINE_4](line_4.md) - Line missing TransportMode
* [LINE_5](line_5.md) - Line missing TransportSubmode
* [LINE_6](line_6.md) - Line with incorrect use of Route
* [LINE_7](line_7.md) - Line missing Network or GroupOfLines
* [LINE_8](line_8.md) - Invalid color coding length on Presentation
* [LINE_9](line_9.md) - Invalid color coding value on Presentation
* [NETEX_ID_1](netex_id_1.md) - NeTEx ID duplicated across files
* [NETEX_ID_10](netex_id_10.md) - Duplicate NeTEx ID across common files
* [NETEX_ID_5](netex_id_5.md) - NeTEx ID unresolved reference
* [NETEX_ID_6](netex_id_6.md) - NeTEx ID reference to invalid element
* [NETEX_ID_7](netex_id_7.md) - NeTEx ID invalid value
* [NETEX_ID_8](netex_id_8.md) - NeTEx ID missing version on elements
* [NETEX_ID_9](netex_id_9.md) - NeTEx ID missing version on reference
* [NETWORK_1](network_1.md) - Network missing AuthorityRef
* [NETWORK_2](network_2.md) - Network missing Name on Network
* [NETWORK_3](network_3.md) - Network missing Name on GroupOfLines
* [NOTICE_1](notice_1.md) - Notice missing Text
* [NOTICE_2](notice_2.md) - Notice missing Text with alternative text
* [NOTICE_3](notice_3.md) - Notice missing language with alternative text
* [NOTICE_4](notice_4.md) - Notice duplicated alternative texts
* [NOTICE_5](notice_5.md) - Notice duplicated assignment
* [NOTICE_6](notice_6.md) - Notice assignment missing reference to noticed object
* [NOTICE_7](notice_7.md) - Notice assignment missing reference to notice
* [OPERATING_PERIOD_1](operating_period_1.md) - OperatingPeriod invalid time interval
* [OPERATOR_1](operator_1.md) - Operator missing CompanyNumber
* [OPERATOR_2](operator_2.md) - Operator missing Name
* [OPERATOR_3](operator_3.md) - Operator missing LegalName
* [OPERATOR_4](operator_4.md) - Operator missing ContactDetails
* [OPERATOR_5](operator_5.md) - Operator missing Url for ContactDetails
* [OPERATOR_6](operator_6.md) - Operator missing CustomerServiceContactDetails
* [OPERATOR_7](operator_7.md) - Operator missing Url for CustomerServiceContactDetails
* [PASSENGER_STOP_ASSIGNMENT_1](passenger_stop_assignment_1.md) - PassengerStopAssignment missing ScheduledStopPointRef
* [PASSENGER_STOP_ASSIGNMENT_2](passenger_stop_assignment_2.md) - PassengerStopAssignment missing QuayRef
* [PASSENGER_STOP_ASSIGNMENT_3](passenger_stop_assignment_3.md) - PassengerStopAssignment duplicated Quay assignment
* [RESOURCE_FRAME_IN_LINE_FILE](resource_frame_in_line_file.md) - ResourceFrame must be exactly one
* [ROUTE_1](route_1.md) - Route missing
* [ROUTE_2](route_2.md) - Route missing Name
* [ROUTE_3](route_3.md) - Route missing LineRef
* [ROUTE_4](route_4.md) - Route missing pointsInSequence
* [ROUTE_5](route_5.md) - Route illegal DirectionRef
* [ROUTE_6](route_6.md) - Route duplicated order
* [ROUTE_7](route_7.md) - Route missing JourneyPattern
* [SERVICE_CALENDAR_1](service_calendar_1.md) - ServiceCalendar unused DayType
* [SERVICE_CALENDAR_2](service_calendar_2.md) - ServiceCalendar empty ServiceCalendar
* [SERVICE_CALENDAR_3](service_calendar_3.md) - ServiceCalendar missing ToDate
* [SERVICE_CALENDAR_4](service_calendar_4.md) - ServiceCalendar missing FromDate
* [SERVICE_CALENDAR_5](service_calendar_5.md) - ServiceCalendar invalid time interval
* [SERVICE_FRAME_1](service_frame_1.md) - ServiceFrame unexpected element GroupOfLines
* [SERVICE_FRAME_2](service_frame_2.md) - ServiceFrame unexpected element timingPoints
* [SERVICE_FRAME_3](service_frame_3.md) - ServiceFrame missing Projection on RoutePoint
* [SERVICE_FRAME_IN_COMMON_FILE_1](service_frame_in_common_file_1.md) - ServiceFrame unexpected element Line
* [SERVICE_FRAME_IN_COMMON_FILE_2](service_frame_in_common_file_2.md) - ServiceFrame unexpected element Route
* [SERVICE_FRAME_IN_COMMON_FILE_3](service_frame_in_common_file_3.md) - ServiceFrame unexpected element JourneyPattern
* [SERVICE_JOURNEY_1](service_journey_1.md) - ServiceJourney must exist
* [SERVICE_JOURNEY_10](service_journey_10.md) - ServiceJourney missing reference to JourneyPattern
* [SERVICE_JOURNEY_11](service_journey_11.md) - ServiceJourney invalid overriding of transport modes
* [SERVICE_JOURNEY_12](service_journey_12.md) - ServiceJourney missing OperatorRef
* [SERVICE_JOURNEY_13](service_journey_13.md) - ServiceJourney missing reference to calendar data
* [SERVICE_JOURNEY_14](service_journey_14.md) - ServiceJourney duplicated reference to calendar data
* [SERVICE_JOURNEY_16](service_journey_16.md) - ServiceJourney multiple versions
* [SERVICE_JOURNEY_17](service_journey_17.md) - Non-unique NeTEx id for TimetabledPassingTime
* [SERVICE_JOURNEY_2](service_journey_2.md) - ServiceJourney illegal element Call
* [SERVICE_JOURNEY_3](service_journey_3.md) - ServiceJourney missing element PassingTimes
* [SERVICE_JOURNEY_4](service_journey_4.md) - ServiceJourney missing arrival and departure
* [SERVICE_JOURNEY_5](service_journey_5.md) - ServiceJourney missing departure times
* [SERVICE_JOURNEY_6](service_journey_6.md) - ServiceJourney missing arrival time for last stop
* [SERVICE_JOURNEY_7](service_journey_7.md) - ServiceJourney identical arrival and departure
* [SERVICE_JOURNEY_8](service_journey_8.md) - ServiceJourney missing id on TimetabledPassingTime
* [SERVICE_JOURNEY_9](service_journey_9.md) - ServiceJourney missing version on TimetabledPassingTime
* [SERVICE_LINK_1](service_link_1.md) - ServiceLink missing FromPointRef
* [SERVICE_LINK_2](service_link_2.md) - ServiceLink missing ToPointRef
* [SERVICE_LINK_3](service_link_3.md) - ServiceLink missing element Projections
* [SERVICE_LINK_4](service_link_4.md) - ServiceLink missing coordinate list
* [SERVICE_LINK_5](service_link_5.md) - ServiceLink less than 2 points
* [SITE_FRAME_IN_COMMON_FILE](site_frame_in_common_file.md) - SiteFrame unexpected SiteFrame in Common file
* [SITE_FRAME_IN_LINE_FILE](site_frame_in_line_file.md) - SiteFrame unexpected SiteFrame in Line file
* [TIMETABLE_FRAME_IN_COMMON_FILE](timetable_frame_in_common_file.md) - TimetableFrame illegal in Common file
* [VALIDITY_CONDITIONS_IN_COMMON_FILE_1](validity_conditions_in_common_file_1.md) - ValidityConditions missing in ServiceFrame or ServiceCalendarFrame
* [VALIDITY_CONDITIONS_IN_COMMON_FILE_2](validity_conditions_in_common_file_2.md) - ValidityConditions missing in ResourceFrames
* [VALIDITY_CONDITIONS_IN_COMMON_FILE_3](validity_conditions_in_common_file_3.md) - ValidityConditions missing in ServiceFrames
* [VALIDITY_CONDITIONS_IN_COMMON_FILE_4](validity_conditions_in_common_file_4.md) - ValidityConditions missing in ServiceCalendarFrames
* [VALIDITY_CONDITIONS_IN_LINE_FILE_1](validity_conditions_in_line_file_1.md) - ValidityConditions missing in all frames
* [VALIDITY_CONDITIONS_IN_LINE_FILE_2](validity_conditions_in_line_file_2.md) - ValidityConditions missing in ServiceFrames
* [VALIDITY_CONDITIONS_IN_LINE_FILE_3](validity_conditions_in_line_file_3.md) - ValidityConditions missing in ServiceCalendarFrames
* [VALIDITY_CONDITIONS_IN_LINE_FILE_4](validity_conditions_in_line_file_4.md) - ValidityConditions missing in TimeTableFrames
* [VALIDITY_CONDITIONS_IN_LINE_FILE_5](validity_conditions_in_line_file_5.md) - ValidityConditions missing in VehicleScheduleFrame
* [VERSION_NON_NUMERIC](version_non_numeric.md) - Non-numeric NeTEx version
* [XML_SCHEMA_ERROR](xml_schema_error.md) - NeTEx XML Schema validation error
* [XML_SCHEMA_WARNING](xml_schema_warning.md) - NeTEx XML Schema validation warning
