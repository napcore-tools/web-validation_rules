# DATA4PT NeTEx Validation Rules Overview rules

* [C.01.02](c-01-02.md) - The versions of NeTEx schema being used should be specified
* [C.01.03](c-01-03.md) - The versions of the profile being used should be specified
* [C.01.04](c-01-04.md) - The PublicationRequest element in the header should be populated
* [C.01.05](c-01-05.md) - Any Topics mentioned in the Header must be present in the Delivery
* [C.02.01](c-02-01.md) - All objects are uniquely identified
* [C.02.03](c-02-03.md) - All elements (except CODESPACE) should have a version attribute.
* [C.02.03-b](c-02-03-b.md) - The order number on elements in sequences of child elements should be unique
* [C.02.04](c-02-04.md) - All references should include an explicit version on the reference.
* [C.02.05](c-02-05.md) - All frames should have a default CODE SPACE declared
* [C.02.05-b](c-02-05-b.md) - Any local reference should correspond to an object declared elsewhere in the same document.
* [C.02.06](c-02-06.md) - All CODE SPACE prefixes used in identifiers should be declared with a CODE SPACE on the frame.
* [C.02.07](c-02-07.md) - The format of element identifiers should follow any rules specific to the profile
* [C.03.01](c-03-01.md) - The version number of each VERSION FRAME should be populated with a number
* [C.03.02](c-03-02.md) - The FrameDefaults of a VERSION FRAME should have values appropriate to the content
* [C.03.04](c-03-04.md) - Only the specialisation of VERSION FRAME (RESORCE FRAME, SITE FRAME, SERVICE FRAME, SERVICE FRAME< TIMETABLE FRAME, and SERVICE CALENDAR FRAME) appropriate to the profile should be used
* [C.03.05](c-03-05.md) - A TYPE OF FRAME is specified on each VERSION FRAME. and corresponds to one of those required by the profile
* [C.03.05-b](c-03-05-b.md) - Types of Frame in use: (EU_PI_COMMON. PI_PI_STOP. EU_PI_NETWORK. EU_PI_TIMETABLE. EU_PI_CALENDAR. EU_PI_LINE_OFFER. EU_PI_NETWORK_OFFER. EU_PI_STOP_OFFER. EU_PI_METADATA)
* [C.04.01](c-04-01.md) - The same object type should only be present in a single frame type
* [C.04.02](c-04-02.md) - Ordered sequences of child elements shall be serialized in sequence in the accordance with the ascending value of their order attribute -
* [C.04.04](c-04-04.md) - Single instances of ancillary and child elements should be declared inline as part of an object.
* [C.04.04-b](c-04-04-b.md) - Elements should not be repeated unnecessarily as separate instances.
* [C.04.05](c-04-05.md) - NOTICes should be declared locally
* [C.09.01](c-09-01.md) - On a VALIDITY CONDITION. ToDate must not be later than FromDate on any date range
* [C.09.02](c-09-02.md) - On a VERSION FRAME. ToDate must not be later than FromDate on any date range.
* [C.09.03](c-09-03.md) - ToDate must not be later than FromDate on other date ranges
* [C.09.04](c-09-04.md) - Date ranges of elements in the frame must lie between date ranges of the VALIDITY CONDITION on the VERSION FRAME
* [C.09.06](c-09-06.md) - If the URL field is filled. the validity of the URL must be checked and must resolved
* [C.09.07](c-09-07.md) - Check valid ISO codes for lang etc.
* [C.09.08](c-09-08.md) - Check valid ISO codes for Country. etc.
* [C.09.10](c-09-10.md) - A coordinate system should be specified for spatial coordinates
* [C.09.11](c-09-11.md) - WGS84 is the preferred coordinate system
* [C.09.12](c-09-12.md) - A POINT should normally have spatial coordinates specified.
* [C.09.13](c-09-13.md) - A ZONE should normally have at least a centroid point specified.
* [S.01.01](s-01-01.md) - Every STOP PLACE has a Name or ShortName attibute
* [S.01.03](s-01-03.md) - Every STOP PLACE has a StopPlaceType attribute with correct value
* [S.01.04](s-01-04.md) - All stop identifiers (QUAY. all STOP PLACEs. GROUPs OF STOP PLACEs and ACCESS) must comply with the profile codification
* [S.01.05](s-01-05.md) - A responsible OPERATOR must be declared for each STOP PLACE(Can be defaulted from frame)
* [S.01.08](s-01-08.md) - Any STOP PLACE that is declared should be referenced by a STOP ASSIGNMENT
* [S.03.01](s-03-01.md) - STOP PLACES should be organised hierarchically so as to separate the modes.
* [S.03.02](s-03-02.md) - A Monomodal STOP PLACE should only have QUAYS of a single mode
* [S.03.02-b](s-03-02-b.md) - SCHEDULED STOP POINT must be assigned to a STOP PLACE
* [S.03.03](s-03-03.md) - MODE of a QUAY of a monomodal STOP PLACE should match the STOP PLACE
* [S.03.04](s-03-04.md) - Multimodal STOP PLACE and should contain at two different monomodal STOP PLACEs of different MODes
* [S.03.05](s-03-05.md) - GROUP OF STOP PLACEs should contain only STOP PLACEs
* [S.03.06](s-03-06.md) - Name of a QUAY should not repeat those of the STOP PLACE
* [S.04.01](s-04-01.md) - A SCHEDULED STOP POINT must have an instantiated Name field
* [S.04.02](s-04-02.md) - SCHEDULED STOP POINT must have the same mode as the assigned STOP PLACE
* [S.04.02-b](s-04-02-b.md) - SCHEDULED STOP POINT must have similar spatial coordinates to those of the assigned STOP PLACE
* [S.04.03](s-04-03.md) - If a SCHEDULED STOP POINT is assigned to a STOP PLACE the type of stop should be consistent on both. And also on any QUAY
* [S.08.01](s-08-01.md) - Location Is Unreasonable For QUAY
* [S.08.02](s-08-02.md) - Location Is Unreasonable For STOP POINT
* [S.08.03](s-08-03.md) - Distance Between QUAY and STOP PLACE too long
* [S.08.04](s-08-04.md) - Check if there are any nearby, very similar locations of the same EntityType
* [S.09.01](s-09-01.md) - Distance between SCHEDULED STOP POINTS at a CONNECTION is plausible
* [S.09.01-b](s-09-01-b.md) - The location of QUAY and SCHEDULED STOP POINT should be within reasonable distance of the location or surface of STOP PLACE
* [S.15.01](s-15-01.md) - Every TOPOGRAPHIC PLACE has a Name
* [S.15.02](s-15-02.md) - Type of TOPOGRAPHIC LOCATIONS
* [S.15.03](s-15-03.md) - PostalRegion attribute on ADDRESS element
* [S.15.04](s-15-04.md) - Hierarchy of TOPOGRAPHIC LOCATIONS
* [S.15.06](s-15-06.md) - Management of STOP PLACE's additionalTopographicPlaces (belonging to several municipalities)
* [S.30.05](s-30-05.md) - Membership of a SITE by a SITE COMPONENT.
* [S.31.01](s-31-01.md) - The members of a CONSTRAINT ZONE are SCHEDULED STOP POINTs
* [S.31.02](s-31-02.md) - A ROUTING CONSTRAINT ZONE must be defined either by Stop or by a boundary
* [S.31.03](s-31-03.md) - A ROUTING CONSTRAINT ZONE must specify the nature of its use.
* [T.02.01](t-02-01.md) - Each LINE should have a different name and a different public code
* [T.02.02](t-02-02.md) - TransportSubmode must be a part of the TransportMode
* [T.02.02-b](t-02-02-b.md) - Every LINE must have an OPERATOR
* [T.02.03](t-02-03.md) - The TypeOfLineRef must meet the profile requirements
* [T.02.04](t-02-04.md) - MODE and SUBMODE of a LINE must be consistent with stops and journeys
* [T.02.05](t-02-05.md) - A LINE must have at least one ROUTE
* [T.02.05-b](t-02-05-b.md) - The “inverse” of the SERVICE PATTERN must match the approximate reverse of sequence
* [T.02.08](t-02-08.md) - If no RouteRef is available in a SERVICE JOURNEY. a RouteView with LineRef must be available
* [T.02.10](t-02-10.md) - Check that there is at least one LINE in any GROUP OF LINEs
* [T.02.11](t-02-11.md) - The main line of a GROUP OF LINEs must be part of the group
* [T.02.11-b](t-02-11-b.md) - Colour used for each separate LINE should be distinct
* [T.02.12](t-02-12.md) - A LINE must have one or more ROUTE instances
* [T.02.13](t-02-13.md) - A ROUTE must be referenced by a SERVICE JOURNEY PATTERN directly or indirectly.
* [T.02.14](t-02-14.md) - The MODE of a GROUP OF LINEs NETWORK must be consistent with that of the individual LINEs
* [T.03.01](t-03-01.md) - A primary SERVICE JOURNEY shall have at least one SERVICE PATTTERN, and/or have a list of CALLs
* [T.03.01-b](t-03-01-b.md) - A ROUTE must have one or more SERVICE PATTERNs that use it.
* [T.03.01-c](t-03-01-c.md) - A SERVICE JOURNEY must reference a SERVICE PATTERN.
* [T.03.03](t-03-03.md) - SERVICE JOURNEY PATTERN must contain POINTS IN JOURNEY PATTERN
* [T.03.03-b](t-03-03-b.md) - A SERVICE JOURNEY PATTERN must have a minimum of two Points
* [T.03.04](t-03-04.md) - The TransportMode and TransportSubmode of the Journey must respect the choices of the profile
* [T.03.04-b](t-03-04-b.md) - JOURNEY PATTERNs of SERVICE JOURNEYs shall only include S POINTS IN JOURNEY PATTERN that reference SHCEDULED STOP POINTs
* [T.03.06](t-03-06.md) - An OPERATOR must be declared for each SERVIOCE JOURNEY
* [T.03.09](t-03-09.md) - A substitution SERVICE JOURNEY must reference a SERVICE JOURNEY that it is replacing
* [T.04.01](t-04-01.md) - Every SERVICE JOURNEY should be referenced either by a GROUP OF SERVICEs or by a SERVICE JOURNEY INTERCHANGE or by an INTERCHANGE RULE.
* [T.04.02](t-04-02.md) - A SERVICE JOURNEY instances that have a similar DIRECTION and DAY TYPE and JOURNEY PATTERN should be grouped with a GROUP OF SERVICEs
* [T.07.11](t-07-11.md) - DESTINATION DISPLAYs should always have at least one "FrontText"
* [T.07.12](t-07-12.md) - DESTINATION DISPLAY VARIANTs always have at least one "FrontText"
* [T.07.XX](t-07-xx.md) - Check if the Journey PATTERN matches any associated ROUTE
* [T.08.01](t-08-01.md) - A SERVICE JOURNEY have at least one DAY TYPE
* [T.08.02](t-08-02.md) - A DAY TYPE must have sufficient PropertiesOfDay to characterise it
* [T.08.05](t-08-05.md) - Days without scheduled SERVICE JOURNEYs for a Line must raise a warning
* [T.08.11](t-08-11.md) - Validity period of the SERVICE JOURNEYs must fall within the validity period of the VERSION FRAME
* [T.08.12](t-08-12.md) - The validity of the timetable must be at least N days.
* [T.09.01](t-09-01.md) - Every POINT IN JOURNEY POINT In a JOURNEY PATTERN used by a JOURNEY must have an PASSING TIME with arrival and departure time (except for the first and last stop)
* [T.09.02](t-09-02.md) - There should be a time specified on each CALL of a SERVICE JOURNET
* [T.09.03](t-09-03.md) - Successive DayOffset+PassingTimes for the POINTs IN JOURNEY Pattern or CALLS of a Journey must not decrease. N
* [T.09.06](t-09-06.md) - Consistency of schedules: schedules at the earliest and at the latest
* [T.09.07](t-09-07.md) - Successive timing between stops should be consistent with specified durations from TIMING LINKs t
* [T.09.09](t-09-09.md) - PASSING TIMEs for successive POINT IN JORUNEY PATTERNS must result in a plausible speed for the MODE and VEHICLE TYPE
* [T.09.10](t-09-10.md) - The duration of a SERVICE JORUNEY Journey should be consistent with the timings and distances.
* [T.11.01](t-11-01.md) - Shared JOURNEY PARTs must be independent of any specific SERVICE JORUNEY
* [T.11.02](t-11-02.md) - Each JOURNEY PART should be coherent with the SERVICE PATTERN of the SERVICE JOURNEY
* [T.11.03](t-11-03.md) - Timings of each JOURNEY PART should be coherent with the times of the SERVICE JOURNEY
* [T.11.05](t-11-05.md) - JOURNEY PART is coherent with the parent JOURNEY
* [T.11.09](t-11-09.md) - JOURNEY PART COUPLEs should be consistent with JOURNEY PARTs
* [T.12.02](t-12-02.md) - Distance between SCHEDULED STOP POINTS in JOURNEY PATTERN is plausible
* [T.12.04](t-12-04.md) - If the DESTINATION DISPLAY is flagged as changing at a point, then the new DESTINATION DISPLAY must be present.
* [T.14.01](t-14-01.md) - TEMPLATE SERVICE JOURNEYs must have an associated frequency or rhythm
* [T.14.01-b](t-14-01-b.md) - Specific VEHICLE TYPE capabilities should be populated (e.g. wheelchair)
* [T.14.02](t-14-02.md) - RHYTHMICAL JOUREY GROUP should not be used in EPIP
* [T.14.03](t-14-03.md) - For a HEADWAY JOURNEY GROUa frequency must be specified
* [T.14.04](t-14-04.md) - End of Period of cadences for JOURNEY FREQUENCY GROUP must be specified
* [T.14.07](t-14-07.md) - TEMPLATE SERVICE JOURNEY must have an appropriate type attribute
* [T.14.09](t-14-09.md) - Reference usage for HEADWAY JOURNEY GROUP and RHYTHMICAL JOURNEY GROUP should be declared in frame and not inline
* [T.14.10](t-14-10.md) - JOURNEY FREQUENCY GROUP must contain more than one SERVICE JOURNEY
* [T.14.XX](t-14-xx.md) - Consistency of the return route
* [T.14.XX-b](t-14-xx-b.md) - LINE and ROUTE should be linked consistently
* [T.21.01](t-21-01.md) - A TRANSFER must have a transfer time
* [T.21.01-b](t-21-01-b.md) - NOTICE ASSIGNMENTS are only related to TIMETABLEs. SERVICE JOURNEYs. POINTs IN JOURNEYPATTERN. SERVICE JOURNEY INTERCHANGEs
* [T.21.02](t-21-02.md) - Transit times should be specified on DEFAULT CONNECTIONs and SITE CONENCTIONs..
* [T.21.03](t-21-03.md) - Transit times should be specified on CONNECTIONs.
* [T.21.04](t-21-04.md) - Checking the type of transfer
* [T.21.05](t-21-05.md) - Reasonable walking speed - Consistency between duration and distance of a CONNECTION / TRANSFER
* [T.21.05-b](t-21-05-b.md) - Check if the SERVICE JOURNEY INTERCHANGE transfer distance is reasonable
* [T.21.07](t-21-07.md) - Duration of interchanges between SERVICE JOURNEYS
* [T.25.01](t-25-01.md) - FLEXIBLE SERVICEA should be characterised by a FlexibleServiceType. This should be coherent with the LINE type.
* [T.25.01-b](t-25-01-b.md) - CLASS of USE on PASSENGER CAPACITY should be restricted to subset of possible values.
* [T.25.02](t-25-02.md) - FLEXIBLE SERVICEs using point standing for a zone should have the required ZONE.
* [T.25.02-b](t-25-02-b.md) - Order of TRAIN COMPONENTs
* [T.25.03](t-25-03.md) - FLEXIBLE SERVICEs using stopping areas require a zone containing stops.
* [T.25.03-b](t-25-03-b.md) - CLASS of USE on TRAIN ELEMENT should be restricted to subset of possible values.
* [T.25.04](t-25-04.md) - FLEXIBLE SERVICE should be coherent with any frequency interval
* [T.25.05](t-25-05.md) - Use specific instances for FLEXIBLE SERVICE PROPERTies for each FLEXIBL SERVICE
* [T.30.01](t-30-01.md) - The URL of the schematic plan must be valid
* [T.30.02](t-30-02.md) - Check objects in SCHEMATIC MAPs
* [T.35.01](t-35-01.md) - Specific BOOKING ARRANGEMENTs must be given
* [T.40.02](t-40-02.md) - A Type of Vehicle must be named
* [T.48.01](t-48-01.md) - Any SCHEDULED STOP POINT that is declared should be used. i.e. referenced by an assignment or POINT IN PATTERN etc.
