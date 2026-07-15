# MobilityData canonical GTFS Schedule validator rules

* [attribution_without_role](attribution_without_role.md) - Attribution with no role.
* [bidirectional_exit_gate](bidirectional_exit_gate.md) - Pathway is bidirectional and has mode 7 (exit gate).
* [big_gap_in_service](big_gap_in_service.md) - A service has a gap of more than 13 days between active service dates.
* [block_trips_with_overlapping_stop_times](block_trips_with_overlapping_stop_times.md) - Trips with the same block id have overlapping stop times.
* [csv_parsing_failed](csv_parsing_failed.md) - Parsing of a CSV file failed.
* [decreasing_or_equal_stop_time_distance](decreasing_or_equal_stop_time_distance.md) - Decreasing or equal `shape_dist_traveled` in `stop_times.txt`.
* [decreasing_shape_distance](decreasing_shape_distance.md) - Decreasing `shape_dist_traveled` in `shapes.txt`.
* [duplicate_fare_media](duplicate_fare_media.md) - Two distinct fare media have the same fare media name and type.
* [duplicate_geo_json_key](duplicate_geo_json_key.md) - A key in `locations.geojson` is duplicated.
* [duplicate_geography_id](duplicate_geography_id.md) - Geography id is duplicated across multiple files.
* [duplicate_key](duplicate_key.md) - Duplicated entity.
* [duplicate_route_name](duplicate_route_name.md) - Two distinct routes have either the same `route_short_name`, the same `route_long_name`, or the same combination of `route_short_name` and `route_long_name`.
* [duplicated_column](duplicated_column.md) - Duplicated column in CSV.
* [empty_column_name](empty_column_name.md) - A column name is empty.
* [empty_file](empty_file.md) - A CSV file is empty.
* [empty_row](empty_row.md) - A row in the input file has only spaces.
* [equal_shape_distance_diff_coordinates](equal_shape_distance_diff_coordinates.md) - Two consecutive points have equal `shape_dist_traveled` and different lat/lon coordinates in `shapes.txt` and the distance between the two points is greater than the 1.11m.
* [equal_shape_distance_diff_coordinates_distance_below_threshold](equal_shape_distance_diff_coordinates_distance_below_threshold.md) - Two consecutive points have equal `shape_dist_traveled` and different lat/lon coordinates in `shapes.txt` and the distance between the two points is greater than 0 but less than 1.11m.
* [equal_shape_distance_same_coordinates](equal_shape_distance_same_coordinates.md) - Two consecutive points have equal `shape_dist_traveled` and the same lat/lon coordinates in `shapes.txt`.
* [expired_calendar](expired_calendar.md) - Dataset should not contain date ranges for services that have already expired.
* [fare_product_with_multiple_default_rider_categories](fare_product_with_multiple_default_rider_categories.md) - This notice is generated when a fare product is associated with multiple rider categories that are marked as default.
* [fare_transfer_rule_duration_limit_type_without_duration_limit](fare_transfer_rule_duration_limit_type_without_duration_limit.md) - A row from GTFS file `fare_transfer_rules.txt` has a defined `duration_limit_type` field but no `duration_limit` specified.
* [fare_transfer_rule_duration_limit_without_type](fare_transfer_rule_duration_limit_without_type.md) - A row from GTFS file `fare_transfer_rules.txt` has a defined `duration_limit` field but no `duration_limit_type` specified.
* [fare_transfer_rule_invalid_transfer_count](fare_transfer_rule_invalid_transfer_count.md) - A row from GTFS file `fare_transfer_rules.txt` has a defined `transfer_count` with an invalid value.
* [fare_transfer_rule_missing_transfer_count](fare_transfer_rule_missing_transfer_count.md) - A row from `fare_transfer_rules.txt` has `from_leg_group_id` equal to `to_leg_group_id`, but has no `transfer_count` specified.
* [fare_transfer_rule_with_forbidden_transfer_count](fare_transfer_rule_with_forbidden_transfer_count.md) - A row from `fare_transfer_rules.txt` has `from_leg_group_id` not equal to `to_leg_group_id`, but has `transfer_count` specified.
* [fare_transfer_rule_without_transfer_count](fare_transfer_rule_without_transfer_count.md) - A row from `fare_transfer_rules.txt` has `from_leg_group_id` equal to `to_leg_group_id`, but has no `transfer_count` specified.
* [fast_travel_between_consecutive_stops](fast_travel_between_consecutive_stops.md) - A transit vehicle moves too fast between two consecutive stops.
* [fast_travel_between_far_stops](fast_travel_between_far_stops.md) - A transit vehicle moves too fast between two far stops.
* [feed_expiration_date30_days](feed_expiration_date30_days.md) - Dataset should cover at least the next 30 days of service.
* [feed_expiration_date7_days](feed_expiration_date7_days.md) - Dataset should be valid for at least the next 7 days.
* [feed_info_lang_and_agency_lang_mismatch](feed_info_lang_and_agency_lang_mismatch.md) - Mismatching feed and agency language fields.
* [feed_valid_beyond_total_service_window](feed_valid_beyond_total_service_window.md) - The feed is valid 14 days beyond its total service window.
* [forbidden_arrival_or_departure_time](forbidden_arrival_or_departure_time.md) - The arrival or departure times are provided alongside pickup or drop-off windows in `stop_times.txt`.
* [forbidden_continuous_pickup_drop_off](forbidden_continuous_pickup_drop_off.md) - Continuous pickup or drop-off are forbidden when routes.continuous_pickup or routes.continuous_drop_off are 0, 2 or 3 and stop_times.start_pickup_drop_off_window or stop_times.end_pickup_drop_off_window are defined for any trip of this route.
* [forbidden_drop_off_type](forbidden_drop_off_type.md) - pickup_drop_off_window fields are forbidden when the drop_off_type is regularly scheduled (0).
* [forbidden_geography_id](forbidden_geography_id.md) - A stop_time entry has more than one geographical id defined.
* [forbidden_pickup_type](forbidden_pickup_type.md) - pickup_drop_off_window fields are forbidden when the pickup_type is regularly scheduled (0) or must be coordinated with the driver (3).
* [forbidden_prior_day_booking_field_value](forbidden_prior_day_booking_field_value.md) - A forbidden field value is present for a prior-day booking rule in `booking_rules.txt`
* [forbidden_prior_notice_start_day](forbidden_prior_notice_start_day.md) - `prior_notice_start_day` value is forbidden when `prior_notice_duration_max` is set.
* [forbidden_prior_notice_start_time](forbidden_prior_notice_start_time.md) - `prior_notice_start_time` value is forbidden when `prior_notice_start_day` value is not set in booking_rules.txt.
* [forbidden_real_time_booking_field_value](forbidden_real_time_booking_field_value.md) - A forbidden field value is present for a real-time booking rule in `booking_rules.txt`.
* [forbidden_same_day_booking_field_value](forbidden_same_day_booking_field_value.md) - A forbidden field value is present for a same-day booking rule in `booking_rules.txt`.
* [forbidden_shape_dist_traveled](forbidden_shape_dist_traveled.md) - A stop_time entry has a `shape_dist_traveled` without a `stop_id` value.
* [foreign_key_violation](foreign_key_violation.md) - Wrong foreign key.
* [future_calendar](future_calendar.md) - All services in the feed start in the future; no service covers today's date.
* [future_feed](future_feed.md) - The feed covers the future only.
* [geo_json_duplicated_element](geo_json_duplicated_element.md) - Duplicated elements in locations.geojson file.
* [geo_json_unknown_element](geo_json_unknown_element.md) - Unknown elements in locations.geojson file.
* [i_o_error](i_o_error.md) - Error in IO operation.
* [inconsistent_agency_lang](inconsistent_agency_lang.md) - Inconsistent language among agencies.
* [inconsistent_agency_timezone](inconsistent_agency_timezone.md) - Inconsistent Timezone among agencies.
* [inconsistent_route_type_for_block_id](inconsistent_route_type_for_block_id.md) - A block should have the same route mode.
* [inconsistent_route_type_for_in_seat_transfer](inconsistent_route_type_for_in_seat_transfer.md) - An in-seat transfer should occur in the same route mode.
* [invalid_character](invalid_character.md) - This field contains invalid characters, such as the replacement character ("\uFFFD").
* [invalid_color](invalid_color.md) - A field contains an invalid color value.
* [invalid_currency](invalid_currency.md) - A field contains a wrong currency code.
* [invalid_currency_amount](invalid_currency_amount.md) - A currency amount field has a value that does not match the format of its corresponding currency code field.
* [invalid_date](invalid_date.md) - A field cannot be parsed as date.
* [invalid_email](invalid_email.md) - A field contains a malformed email address.
* [invalid_float](invalid_float.md) - A field cannot be parsed as a floating point number.
* [invalid_geometry](invalid_geometry.md) - A polygon in `locations.geojson` is unparsable or invalid.
* [invalid_input_files_in_subfolder](invalid_input_files_in_subfolder.md) - At least 1 GTFS file is in a subfolder.
* [invalid_integer](invalid_integer.md) - A field cannot be parsed as an integer.
* [invalid_language_code](invalid_language_code.md) - A field contains a wrong language code.
* [invalid_phone_number](invalid_phone_number.md) - A field contains a malformed phone number.
* [invalid_pickup_drop_off_window](invalid_pickup_drop_off_window.md) - The pickup/drop-off window in `stop_times.txt` is invalid.
* [invalid_prior_notice_duration_min](invalid_prior_notice_duration_min.md) - An invalid `prior_notice_duration_min` value is present in a booking rule.
* [invalid_row_length](invalid_row_length.md) - Invalid csv row length.
* [invalid_time](invalid_time.md) - A field cannot be parsed as time.
* [invalid_timezone](invalid_timezone.md) - A field cannot be parsed as a timezone.
* [invalid_url](invalid_url.md) - A field contains a malformed URL.
* [leading_or_trailing_whitespaces](leading_or_trailing_whitespaces.md) - The value in CSV file has leading or trailing whitespaces.
* [location_with_unexpected_stop_time](location_with_unexpected_stop_time.md) - A location in `stops.txt` that is not a stop is referenced by some `stop_times.stop_id`.
* [location_without_parent_station](location_without_parent_station.md) - A location that must have `parent_station` field does not have it.
* [malformed_json](malformed_json.md) - A JSON file is malformed.
* [missing_bike_allowance](missing_bike_allowance.md) - Ferry trips should include bike allowance information.
* [missing_calendar_and_calendar_date_files](missing_calendar_and_calendar_date_files.md) - Missing GTFS files `calendar.txt` and `calendar_dates.txt`.
* [missing_feed_contact_email_and_url](missing_feed_contact_email_and_url.md) - Best Practices for `feed_info.txt` suggest providing at least one of `feed_contact_email` and `feed_contact_url`.
* [missing_feed_info_date](missing_feed_info_date.md) - One of `feed_start_date` or `feed_end_date` is specified, but not both.
* [missing_level_id](missing_level_id.md) - `stops.level_id` is conditionally required.
* [missing_pickup_drop_off_booking_rule_id](missing_pickup_drop_off_booking_rule_id.md) - pickup_booking_rule_id is recommended when pickup_type=2 and drop_off_booking_rule_id is recommended when drop_off_type=2.
* [missing_pickup_or_drop_off_window](missing_pickup_or_drop_off_window.md) - Either the start or end pickup/drop-off window is missing in `stop_times.txt`.
* [missing_prior_day_booking_field_value](missing_prior_day_booking_field_value.md) - The `prior_notice_last_day` and the `prior_notice_last_time` values are required for prior day `booking_type` in booking_rules.txt.
* [missing_prior_notice_duration_min](missing_prior_notice_duration_min.md) - `prior_notice_duration_min` value is required for same day `booking_type` in booking_rules.txt.
* [missing_prior_notice_last_day](missing_prior_notice_last_day.md) - The `prior_notice_last_day` is required when booking_type=2 (prior day booking) is specified in booking_rules.txt.
* [missing_prior_notice_last_time](missing_prior_notice_last_time.md) - The `prior_notice_last_time` is required when booking_type=2 (prior day booking) is specified in booking_rules.txt.
* [missing_prior_notice_start_time](missing_prior_notice_start_time.md) - `prior_notice_start_time` value is required when `prior_notice_start_day` value is set in booking_rules.txt.
* [missing_recommended_column](missing_recommended_column.md) - A recommended column is missing in the input file.
* [missing_recommended_field](missing_recommended_field.md) - A recommended field is missing.
* [missing_recommended_file](missing_recommended_file.md) - A recommended file is missing.
* [missing_required_agency_id](missing_required_agency_id.md) - Agency id is required when there are multiple agencies.
* [missing_required_column](missing_required_column.md) - A required column is missing in the input file.
* [missing_required_element](missing_required_element.md) - A required element is missing in `locations.geojson`.
* [missing_required_field](missing_required_field.md) - A required field is missing.
* [missing_required_file](missing_required_file.md) - A required file is missing.
* [missing_stop_name](missing_stop_name.md) - `stops.stop_name` is required for `location_type` equal to `0`, `1`, or `2`.
* [missing_stop_times_record](missing_stop_times_record.md) - Only one stop_times record is found where two are required.
* [missing_timepoint_value](missing_timepoint_value.md) - `stop_times.timepoint` value is missing for a record.
* [missing_trip_edge](missing_trip_edge.md) - Missing trip edge `arrival_time` or `departure_time`.
* [mixed_case_recommended_field](mixed_case_recommended_field.md) - This field has customer-facing text and should use Mixed Case (should contain upper and lower case letters).
* [more_than_one_entity](more_than_one_entity.md) - More than one row in CSV.
* [new_line_in_value](new_line_in_value.md) - New line or carriage return in a value in CSV file.
* [non_ascii_or_non_printable_char](non_ascii_or_non_printable_char.md) - Non ascii or non printable char in ID field.
* [number_out_of_range](number_out_of_range.md) - Out of range value.
* [overlapping_frequency](overlapping_frequency.md) - Trip frequencies overlap.
* [overlapping_zone_and_pickup_drop_off_window](overlapping_zone_and_pickup_drop_off_window.md) - Two entities have overlapping pickup/drop-off windows and zones.
* [pathway_dangling_generic_node](pathway_dangling_generic_node.md) - A generic node has only one incident location in a pathway graph.
* [pathway_loop](pathway_loop.md) - A pathway starts and ends at the same location.
* [pathway_to_platform_with_boarding_areas](pathway_to_platform_with_boarding_areas.md) - A pathway has an endpoint that is a platform which has boarding areas.
* [pathway_to_stop_with_access_outside_of_station_pathways](pathway_to_stop_with_access_outside_of_station_pathways.md) - A pathway has an endpoint that is a stop with stop_access=1, which should be accessible outside of the station's pathways.
* [pathway_to_wrong_location_type](pathway_to_wrong_location_type.md) - A pathway has an endpoint that is a station.
* [pathway_unreachable_location](pathway_unreachable_location.md) - A location is not reachable at least in one direction: from the entrances or to the exits.
* [platform_without_parent_station](platform_without_parent_station.md) - A platform has no `parent_station` field set.
* [point_near_origin](point_near_origin.md) - A point is too close to origin `(0, 0)`.
* [point_near_pole](point_near_pole.md) - A point is too close to the North or South Pole.
* [prior_notice_last_day_after_start_day](prior_notice_last_day_after_start_day.md) - Prior notice last day should not be greater than the prior notice start day in booking_rules.txt.
* [route_both_short_and_long_name_missing](route_both_short_and_long_name_missing.md) - Both `route_short_name` and `route_long_name` are missing for a route.
* [route_color_contrast](route_color_contrast.md) - Insufficient route color contrast.
* [route_long_name_contains_short_name](route_long_name_contains_short_name.md) - Long name should not contain short name for a single route.
* [route_networks_specified_in_more_than_one_file](route_networks_specified_in_more_than_one_file.md) - Indicates that route network identifiers are specified across multiple files.
* [route_short_name_too_long](route_short_name_too_long.md) - Short name of a route is too long (more than 12 characters).
* [runtime_exception_in_loader_error](runtime_exception_in_loader_error.md) - RuntimeException while loading GTFS dataset in memory.
* [runtime_exception_in_validator_error](runtime_exception_in_validator_error.md) - RuntimeException while validating GTFS archive.
* [same_name_and_description_for_route](same_name_and_description_for_route.md) - Same name and description for route.
* [same_name_and_description_for_stop](same_name_and_description_for_stop.md) - Same name and description for stop.
* [same_route_and_agency_url](same_route_and_agency_url.md) - Same `routes.route_url` and `agency.agency_url`.
* [same_stop_and_agency_url](same_stop_and_agency_url.md) - Same `stops.stop_url` and `agency.agency_url`.
* [same_stop_and_route_url](same_stop_and_route_url.md) - Same `stops.stop_url` and `routes.route_url`.
* [service_extends_far_in_the_future](service_extends_far_in_the_future.md) - A service end date is more than 2 years in the future.
* [service_has_no_active_day_of_the_week](service_has_no_active_day_of_the_week.md) - A service is not valid for any day of the week.
* [service_window_outside_feed_period](service_window_outside_feed_period.md) - A service window is not covered by the feed's validity period.
* [single_shape_point](single_shape_point.md) - The shape within `shapes.txt` contains a single shape point.
* [start_and_end_range_equal](start_and_end_range_equal.md) - Two date or time fields are equal.
* [start_and_end_range_out_of_order](start_and_end_range_out_of_order.md) - Two date or time fields are out of order.
* [station_with_parent_station](station_with_parent_station.md) - A station has `parent_station` field set.
* [stop_access_specified_for_incorrect_location](stop_access_specified_for_incorrect_location.md) - A location that is not a stop has stop_access specified.
* [stop_access_specified_for_stop_with_no_parent_station](stop_access_specified_for_stop_with_no_parent_station.md) - A stop without a value for parent station has stop_access specified.
* [stop_has_too_many_matches_for_shape](stop_has_too_many_matches_for_shape.md) - Stop entry that has many potential matches to the trip's path of travel, as defined by the shape entry in `shapes.txt`.
* [stop_time_timepoint_without_times](stop_time_timepoint_without_times.md) - `arrival_time` or `departure_time` not specified for timepoint.
* [stop_time_with_arrival_before_previous_departure_time](stop_time_with_arrival_before_previous_departure_time.md) - Backwards time travel between stops in `stop_times.txt`
* [stop_time_with_only_arrival_or_departure_time](stop_time_with_only_arrival_or_departure_time.md) - Missing `stop_times.arrival_time` or `stop_times.departure_time`.
* [stop_too_far_from_shape](stop_too_far_from_shape.md) - Stop too far from trip shape.
* [stop_too_far_from_shape_using_user_distance](stop_too_far_from_shape_using_user_distance.md) - Stop time too far from shape.
* [stop_without_location](stop_without_location.md) - `stop_lat` and/or `stop_lon` is missing for stop with `location_type` equal to`0`, `1`, or `2`
* [stop_without_stop_time](stop_without_stop_time.md) - A stop in `stops.txt` is not referenced by any `stop_times.stop_id`.
* [stop_without_zone_id](stop_without_zone_id.md) - Stop without value for `stops.zone_id` contained in a route with a zone-dependent fare rule.
* [stops_match_shape_out_of_order](stops_match_shape_out_of_order.md) - Two stop entries are different than their arrival-departure order defined by `shapes.txt`.
* [thread_execution_error](thread_execution_error.md) - ExecutionException during multithreaded validation
* [timeframe_only_start_or_end_time_specified](timeframe_only_start_or_end_time_specified.md) - A row from `timeframes.txt` was found with only one of `start_time` and `end_time` specified.
* [timeframe_overlap](timeframe_overlap.md) - Two entries in `timeframes.txt` with the same `timeframe_group_id` and `service_id` have overlapping time intervals.
* [timeframe_start_or_end_time_greater_than_twenty_four_hours](timeframe_start_or_end_time_greater_than_twenty_four_hours.md) - A time in `timeframes.txt` is greater than `24:00:00`.
* [too_many_rows](too_many_rows.md) - A CSV file has too many rows.
* [transfer_distance_above_2_km](transfer_distance_above_2_km.md) - The transfer distance from stop to stop in `transfers.txt` is larger than 2 km.
* [transfer_distance_too_large](transfer_distance_too_large.md) - The transfer distance from stop to stop in `transfers.txt` is larger than 10 km.
* [transfer_with_invalid_stop_location_type](transfer_with_invalid_stop_location_type.md) - A stop id field from GTFS file `transfers.txt` references a stop that has a `location_type` other than 0 or 1 (aka Stop/Platform or Station).
* [transfer_with_invalid_trip_and_route](transfer_with_invalid_trip_and_route.md) - A trip id field from GTFS file `transfers.txt` references a route that does not match its `trips.txt` `route_id`.
* [transfer_with_invalid_trip_and_stop](transfer_with_invalid_trip_and_stop.md) - A trip id field from GTFS file `transfers.txt` references a stop that is not included in the referenced trip's stop-times.
* [transfer_with_suspicious_mid_trip_in_seat](transfer_with_suspicious_mid_trip_in_seat.md) - A trip id field from GTFS file `transfers.txt` with an in-seat transfer type references a stop that is not in the expected position in the trip's stop-times.
* [translation_foreign_key_violation](translation_foreign_key_violation.md) - An entity with the given `record_id` and `record_sub_id` cannot be found in the referenced table.
* [translation_unexpected_value](translation_unexpected_value.md) - A field in a translations row has value but must be empty.
* [translation_unknown_table_name](translation_unknown_table_name.md) - A translation references an unknown or missing GTFS table.
* [trip_coverage_not_active_for_next7_days](trip_coverage_not_active_for_next7_days.md) - Trips data should be valid for at least the next seven days.
* [trip_distance_exceeds_shape_distance](trip_distance_exceeds_shape_distance.md) - The distance between the last shape point and last stop point is greater than or equal to the 11.1m threshold.
* [trip_distance_exceeds_shape_distance_below_threshold](trip_distance_exceeds_shape_distance_below_threshold.md) - The distance between the last shape point and last stop point is greater than 0 but less than the 11.1m threshold.
* [trip_headsign_matches_intermediate_stop](trip_headsign_matches_intermediate_stop.md) - Trip headsign matches the name of an intermediate stop, not the last stop.
* [trip_with_shape_dist_traveled_but_no_shape_distances](trip_with_shape_dist_traveled_but_no_shape_distances.md) - A trip has shape_dist_traveled values in stop_times.txt but the shape referenced by the trip's shape_id does not have shape_dist_traveled values on all of its points in shapes.txt.
* [u_r_i_syntax_error](u_r_i_syntax_error.md) - A string could not be parsed as a URI reference.
* [unexpected_enum_value](unexpected_enum_value.md) - An enum has an unexpected value.
* [unknown_column](unknown_column.md) - A column name is unknown.
* [unknown_file](unknown_file.md) - A file is unknown.
* [unsorted_stop_times](unsorted_stop_times.md) - Stop times are not sorted by trip_id and stop_sequence.
* [unsupported_feature_type](unsupported_feature_type.md) - An unsupported feature type is used in the `locations.geojson` file.
* [unsupported_geo_json_type](unsupported_geo_json_type.md) - An unsupported GeoJSON type is used in the `locations.geojson` file.
* [unsupported_geometry_type](unsupported_geometry_type.md) - A GeoJSON feature has an unsupported geometry type in `locations.geojson`.
* [unusable_trip](unusable_trip.md) - Trips must have more than one stop to be usable.
* [unused_parent_station](unused_parent_station.md) - Unused parent station.
* [unused_shape](unused_shape.md) - Shape is not used in GTFS file `trips.txt`.
* [unused_station](unused_station.md) - Unused station.
* [unused_trip](unused_trip.md) - Trip is not be used in `stop_times.txt`
* [wrong_parent_location_type](wrong_parent_location_type.md) - Incorrect type of the parent location.
