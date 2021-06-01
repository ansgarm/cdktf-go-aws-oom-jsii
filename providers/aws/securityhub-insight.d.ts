import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubInsightConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#group_by_attribute SecurityhubInsight#group_by_attribute}.
     */
    readonly groupByAttribute: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#name SecurityhubInsight#name}.
     */
    readonly name: string;
    /**
     * filters block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#filters SecurityhubInsight#filters}
     */
    readonly filters: SecurityhubInsightFilters[];
}
export interface SecurityhubInsightFiltersAwsAccountId {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersCompanyName {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersComplianceStatus {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersConfidence {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}.
     */
    readonly eq?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}.
     */
    readonly gte?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}.
     */
    readonly lte?: string;
}
export interface SecurityhubInsightFiltersCreatedAtDateRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: number;
}
export interface SecurityhubInsightFiltersCreatedAt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}.
     */
    readonly end?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}.
     */
    readonly start?: string;
    /**
     * date_range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
     */
    readonly dateRange?: SecurityhubInsightFiltersCreatedAtDateRange[];
}
export interface SecurityhubInsightFiltersCriticality {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}.
     */
    readonly eq?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}.
     */
    readonly gte?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}.
     */
    readonly lte?: string;
}
export interface SecurityhubInsightFiltersDescription {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsConfidence {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}.
     */
    readonly eq?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}.
     */
    readonly gte?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}.
     */
    readonly lte?: string;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsCriticality {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}.
     */
    readonly eq?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}.
     */
    readonly gte?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}.
     */
    readonly lte?: string;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersFindingProviderFieldsTypes {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersFirstObservedAtDateRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: number;
}
export interface SecurityhubInsightFiltersFirstObservedAt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}.
     */
    readonly end?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}.
     */
    readonly start?: string;
    /**
     * date_range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
     */
    readonly dateRange?: SecurityhubInsightFiltersFirstObservedAtDateRange[];
}
export interface SecurityhubInsightFiltersGeneratorId {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersId {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersKeyword {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersLastObservedAtDateRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: number;
}
export interface SecurityhubInsightFiltersLastObservedAt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}.
     */
    readonly end?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}.
     */
    readonly start?: string;
    /**
     * date_range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
     */
    readonly dateRange?: SecurityhubInsightFiltersLastObservedAtDateRange[];
}
export interface SecurityhubInsightFiltersMalwareName {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersMalwarePath {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersMalwareState {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersMalwareType {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersNetworkDestinationDomain {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersNetworkDestinationIpv4 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}.
     */
    readonly cidr: string;
}
export interface SecurityhubInsightFiltersNetworkDestinationIpv6 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}.
     */
    readonly cidr: string;
}
export interface SecurityhubInsightFiltersNetworkDestinationPort {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}.
     */
    readonly eq?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}.
     */
    readonly gte?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}.
     */
    readonly lte?: string;
}
export interface SecurityhubInsightFiltersNetworkDirection {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersNetworkProtocol {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersNetworkSourceDomain {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersNetworkSourceIpv4 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}.
     */
    readonly cidr: string;
}
export interface SecurityhubInsightFiltersNetworkSourceIpv6 {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}.
     */
    readonly cidr: string;
}
export interface SecurityhubInsightFiltersNetworkSourceMac {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersNetworkSourcePort {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}.
     */
    readonly eq?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}.
     */
    readonly gte?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}.
     */
    readonly lte?: string;
}
export interface SecurityhubInsightFiltersNoteText {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersNoteUpdatedAtDateRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: number;
}
export interface SecurityhubInsightFiltersNoteUpdatedAt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}.
     */
    readonly end?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}.
     */
    readonly start?: string;
    /**
     * date_range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
     */
    readonly dateRange?: SecurityhubInsightFiltersNoteUpdatedAtDateRange[];
}
export interface SecurityhubInsightFiltersNoteUpdatedBy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersProcessLaunchedAtDateRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: number;
}
export interface SecurityhubInsightFiltersProcessLaunchedAt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}.
     */
    readonly end?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}.
     */
    readonly start?: string;
    /**
     * date_range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
     */
    readonly dateRange?: SecurityhubInsightFiltersProcessLaunchedAtDateRange[];
}
export interface SecurityhubInsightFiltersProcessName {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersProcessParentPid {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}.
     */
    readonly eq?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}.
     */
    readonly gte?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}.
     */
    readonly lte?: string;
}
export interface SecurityhubInsightFiltersProcessPath {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersProcessPid {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}.
     */
    readonly eq?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}.
     */
    readonly gte?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}.
     */
    readonly lte?: string;
}
export interface SecurityhubInsightFiltersProcessTerminatedAtDateRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: number;
}
export interface SecurityhubInsightFiltersProcessTerminatedAt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}.
     */
    readonly end?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}.
     */
    readonly start?: string;
    /**
     * date_range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
     */
    readonly dateRange?: SecurityhubInsightFiltersProcessTerminatedAtDateRange[];
}
export interface SecurityhubInsightFiltersProductArn {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersProductFields {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#key SecurityhubInsight#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersProductName {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersRecommendationText {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersRecordState {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersRelatedFindingsId {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersRelatedFindingsProductArn {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceImageId {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}.
     */
    readonly cidr: string;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}.
     */
    readonly cidr: string;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: number;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}.
     */
    readonly end?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}.
     */
    readonly start?: string;
    /**
     * date_range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
     */
    readonly dateRange?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange[];
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceType {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: number;
}
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}.
     */
    readonly end?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}.
     */
    readonly start?: string;
    /**
     * date_range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
     */
    readonly dateRange?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange[];
}
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceAwsS3BucketOwnerId {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceAwsS3BucketOwnerName {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceContainerImageId {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceContainerImageName {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: number;
}
export interface SecurityhubInsightFiltersResourceContainerLaunchedAt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}.
     */
    readonly end?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}.
     */
    readonly start?: string;
    /**
     * date_range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
     */
    readonly dateRange?: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange[];
}
export interface SecurityhubInsightFiltersResourceContainerName {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceDetailsOther {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#key SecurityhubInsight#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceId {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourcePartition {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceRegion {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceTags {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#key SecurityhubInsight#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersResourceType {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersSeverityLabel {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersSourceUrl {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorCategory {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: number;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}.
     */
    readonly end?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}.
     */
    readonly start?: string;
    /**
     * date_range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
     */
    readonly dateRange?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange[];
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorSource {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorType {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorValue {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersTitle {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersType {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersUpdatedAtDateRange {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}.
     */
    readonly unit: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: number;
}
export interface SecurityhubInsightFiltersUpdatedAt {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}.
     */
    readonly end?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}.
     */
    readonly start?: string;
    /**
     * date_range block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
     */
    readonly dateRange?: SecurityhubInsightFiltersUpdatedAtDateRange[];
}
export interface SecurityhubInsightFiltersUserDefinedValues {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#key SecurityhubInsight#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersVerificationState {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFiltersWorkflowStatus {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}.
     */
    readonly comparison: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}.
     */
    readonly value: string;
}
export interface SecurityhubInsightFilters {
    /**
     * aws_account_id block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#aws_account_id SecurityhubInsight#aws_account_id}
     */
    readonly awsAccountId?: SecurityhubInsightFiltersAwsAccountId[];
    /**
     * company_name block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#company_name SecurityhubInsight#company_name}
     */
    readonly companyName?: SecurityhubInsightFiltersCompanyName[];
    /**
     * compliance_status block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#compliance_status SecurityhubInsight#compliance_status}
     */
    readonly complianceStatus?: SecurityhubInsightFiltersComplianceStatus[];
    /**
     * confidence block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#confidence SecurityhubInsight#confidence}
     */
    readonly confidence?: SecurityhubInsightFiltersConfidence[];
    /**
     * created_at block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#created_at SecurityhubInsight#created_at}
     */
    readonly createdAt?: SecurityhubInsightFiltersCreatedAt[];
    /**
     * criticality block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#criticality SecurityhubInsight#criticality}
     */
    readonly criticality?: SecurityhubInsightFiltersCriticality[];
    /**
     * description block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#description SecurityhubInsight#description}
     */
    readonly description?: SecurityhubInsightFiltersDescription[];
    /**
     * finding_provider_fields_confidence block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_confidence SecurityhubInsight#finding_provider_fields_confidence}
     */
    readonly findingProviderFieldsConfidence?: SecurityhubInsightFiltersFindingProviderFieldsConfidence[];
    /**
     * finding_provider_fields_criticality block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_criticality SecurityhubInsight#finding_provider_fields_criticality}
     */
    readonly findingProviderFieldsCriticality?: SecurityhubInsightFiltersFindingProviderFieldsCriticality[];
    /**
     * finding_provider_fields_related_findings_id block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_related_findings_id SecurityhubInsight#finding_provider_fields_related_findings_id}
     */
    readonly findingProviderFieldsRelatedFindingsId?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[];
    /**
     * finding_provider_fields_related_findings_product_arn block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_related_findings_product_arn SecurityhubInsight#finding_provider_fields_related_findings_product_arn}
     */
    readonly findingProviderFieldsRelatedFindingsProductArn?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[];
    /**
     * finding_provider_fields_severity_label block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_severity_label SecurityhubInsight#finding_provider_fields_severity_label}
     */
    readonly findingProviderFieldsSeverityLabel?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[];
    /**
     * finding_provider_fields_severity_original block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_severity_original SecurityhubInsight#finding_provider_fields_severity_original}
     */
    readonly findingProviderFieldsSeverityOriginal?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[];
    /**
     * finding_provider_fields_types block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_types SecurityhubInsight#finding_provider_fields_types}
     */
    readonly findingProviderFieldsTypes?: SecurityhubInsightFiltersFindingProviderFieldsTypes[];
    /**
     * first_observed_at block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#first_observed_at SecurityhubInsight#first_observed_at}
     */
    readonly firstObservedAt?: SecurityhubInsightFiltersFirstObservedAt[];
    /**
     * generator_id block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#generator_id SecurityhubInsight#generator_id}
     */
    readonly generatorId?: SecurityhubInsightFiltersGeneratorId[];
    /**
     * id block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#id SecurityhubInsight#id}
     */
    readonly id?: SecurityhubInsightFiltersId[];
    /**
     * keyword block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#keyword SecurityhubInsight#keyword}
     */
    readonly keyword?: SecurityhubInsightFiltersKeyword[];
    /**
     * last_observed_at block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#last_observed_at SecurityhubInsight#last_observed_at}
     */
    readonly lastObservedAt?: SecurityhubInsightFiltersLastObservedAt[];
    /**
     * malware_name block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#malware_name SecurityhubInsight#malware_name}
     */
    readonly malwareName?: SecurityhubInsightFiltersMalwareName[];
    /**
     * malware_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#malware_path SecurityhubInsight#malware_path}
     */
    readonly malwarePath?: SecurityhubInsightFiltersMalwarePath[];
    /**
     * malware_state block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#malware_state SecurityhubInsight#malware_state}
     */
    readonly malwareState?: SecurityhubInsightFiltersMalwareState[];
    /**
     * malware_type block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#malware_type SecurityhubInsight#malware_type}
     */
    readonly malwareType?: SecurityhubInsightFiltersMalwareType[];
    /**
     * network_destination_domain block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_destination_domain SecurityhubInsight#network_destination_domain}
     */
    readonly networkDestinationDomain?: SecurityhubInsightFiltersNetworkDestinationDomain[];
    /**
     * network_destination_ipv4 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_destination_ipv4 SecurityhubInsight#network_destination_ipv4}
     */
    readonly networkDestinationIpv4?: SecurityhubInsightFiltersNetworkDestinationIpv4[];
    /**
     * network_destination_ipv6 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_destination_ipv6 SecurityhubInsight#network_destination_ipv6}
     */
    readonly networkDestinationIpv6?: SecurityhubInsightFiltersNetworkDestinationIpv6[];
    /**
     * network_destination_port block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_destination_port SecurityhubInsight#network_destination_port}
     */
    readonly networkDestinationPort?: SecurityhubInsightFiltersNetworkDestinationPort[];
    /**
     * network_direction block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_direction SecurityhubInsight#network_direction}
     */
    readonly networkDirection?: SecurityhubInsightFiltersNetworkDirection[];
    /**
     * network_protocol block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_protocol SecurityhubInsight#network_protocol}
     */
    readonly networkProtocol?: SecurityhubInsightFiltersNetworkProtocol[];
    /**
     * network_source_domain block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_domain SecurityhubInsight#network_source_domain}
     */
    readonly networkSourceDomain?: SecurityhubInsightFiltersNetworkSourceDomain[];
    /**
     * network_source_ipv4 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_ipv4 SecurityhubInsight#network_source_ipv4}
     */
    readonly networkSourceIpv4?: SecurityhubInsightFiltersNetworkSourceIpv4[];
    /**
     * network_source_ipv6 block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_ipv6 SecurityhubInsight#network_source_ipv6}
     */
    readonly networkSourceIpv6?: SecurityhubInsightFiltersNetworkSourceIpv6[];
    /**
     * network_source_mac block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_mac SecurityhubInsight#network_source_mac}
     */
    readonly networkSourceMac?: SecurityhubInsightFiltersNetworkSourceMac[];
    /**
     * network_source_port block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_port SecurityhubInsight#network_source_port}
     */
    readonly networkSourcePort?: SecurityhubInsightFiltersNetworkSourcePort[];
    /**
     * note_text block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#note_text SecurityhubInsight#note_text}
     */
    readonly noteText?: SecurityhubInsightFiltersNoteText[];
    /**
     * note_updated_at block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#note_updated_at SecurityhubInsight#note_updated_at}
     */
    readonly noteUpdatedAt?: SecurityhubInsightFiltersNoteUpdatedAt[];
    /**
     * note_updated_by block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#note_updated_by SecurityhubInsight#note_updated_by}
     */
    readonly noteUpdatedBy?: SecurityhubInsightFiltersNoteUpdatedBy[];
    /**
     * process_launched_at block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_launched_at SecurityhubInsight#process_launched_at}
     */
    readonly processLaunchedAt?: SecurityhubInsightFiltersProcessLaunchedAt[];
    /**
     * process_name block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_name SecurityhubInsight#process_name}
     */
    readonly processName?: SecurityhubInsightFiltersProcessName[];
    /**
     * process_parent_pid block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_parent_pid SecurityhubInsight#process_parent_pid}
     */
    readonly processParentPid?: SecurityhubInsightFiltersProcessParentPid[];
    /**
     * process_path block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_path SecurityhubInsight#process_path}
     */
    readonly processPath?: SecurityhubInsightFiltersProcessPath[];
    /**
     * process_pid block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_pid SecurityhubInsight#process_pid}
     */
    readonly processPid?: SecurityhubInsightFiltersProcessPid[];
    /**
     * process_terminated_at block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_terminated_at SecurityhubInsight#process_terminated_at}
     */
    readonly processTerminatedAt?: SecurityhubInsightFiltersProcessTerminatedAt[];
    /**
     * product_arn block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#product_arn SecurityhubInsight#product_arn}
     */
    readonly productArn?: SecurityhubInsightFiltersProductArn[];
    /**
     * product_fields block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#product_fields SecurityhubInsight#product_fields}
     */
    readonly productFields?: SecurityhubInsightFiltersProductFields[];
    /**
     * product_name block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#product_name SecurityhubInsight#product_name}
     */
    readonly productName?: SecurityhubInsightFiltersProductName[];
    /**
     * recommendation_text block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#recommendation_text SecurityhubInsight#recommendation_text}
     */
    readonly recommendationText?: SecurityhubInsightFiltersRecommendationText[];
    /**
     * record_state block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#record_state SecurityhubInsight#record_state}
     */
    readonly recordState?: SecurityhubInsightFiltersRecordState[];
    /**
     * related_findings_id block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#related_findings_id SecurityhubInsight#related_findings_id}
     */
    readonly relatedFindingsId?: SecurityhubInsightFiltersRelatedFindingsId[];
    /**
     * related_findings_product_arn block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#related_findings_product_arn SecurityhubInsight#related_findings_product_arn}
     */
    readonly relatedFindingsProductArn?: SecurityhubInsightFiltersRelatedFindingsProductArn[];
    /**
     * resource_aws_ec2_instance_iam_instance_profile_arn block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_iam_instance_profile_arn SecurityhubInsight#resource_aws_ec2_instance_iam_instance_profile_arn}
     */
    readonly resourceAwsEc2InstanceIamInstanceProfileArn?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[];
    /**
     * resource_aws_ec2_instance_image_id block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_image_id SecurityhubInsight#resource_aws_ec2_instance_image_id}
     */
    readonly resourceAwsEc2InstanceImageId?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[];
    /**
     * resource_aws_ec2_instance_ipv4_addresses block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_ipv4_addresses SecurityhubInsight#resource_aws_ec2_instance_ipv4_addresses}
     */
    readonly resourceAwsEc2InstanceIpv4Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[];
    /**
     * resource_aws_ec2_instance_ipv6_addresses block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_ipv6_addresses SecurityhubInsight#resource_aws_ec2_instance_ipv6_addresses}
     */
    readonly resourceAwsEc2InstanceIpv6Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[];
    /**
     * resource_aws_ec2_instance_key_name block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_key_name SecurityhubInsight#resource_aws_ec2_instance_key_name}
     */
    readonly resourceAwsEc2InstanceKeyName?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[];
    /**
     * resource_aws_ec2_instance_launched_at block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_launched_at SecurityhubInsight#resource_aws_ec2_instance_launched_at}
     */
    readonly resourceAwsEc2InstanceLaunchedAt?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[];
    /**
     * resource_aws_ec2_instance_subnet_id block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_subnet_id SecurityhubInsight#resource_aws_ec2_instance_subnet_id}
     */
    readonly resourceAwsEc2InstanceSubnetId?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[];
    /**
     * resource_aws_ec2_instance_type block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_type SecurityhubInsight#resource_aws_ec2_instance_type}
     */
    readonly resourceAwsEc2InstanceType?: SecurityhubInsightFiltersResourceAwsEc2InstanceType[];
    /**
     * resource_aws_ec2_instance_vpc_id block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_vpc_id SecurityhubInsight#resource_aws_ec2_instance_vpc_id}
     */
    readonly resourceAwsEc2InstanceVpcId?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[];
    /**
     * resource_aws_iam_access_key_created_at block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_iam_access_key_created_at SecurityhubInsight#resource_aws_iam_access_key_created_at}
     */
    readonly resourceAwsIamAccessKeyCreatedAt?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[];
    /**
     * resource_aws_iam_access_key_status block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_iam_access_key_status SecurityhubInsight#resource_aws_iam_access_key_status}
     */
    readonly resourceAwsIamAccessKeyStatus?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[];
    /**
     * resource_aws_iam_access_key_user_name block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_iam_access_key_user_name SecurityhubInsight#resource_aws_iam_access_key_user_name}
     */
    readonly resourceAwsIamAccessKeyUserName?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[];
    /**
     * resource_aws_s3_bucket_owner_id block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_s3_bucket_owner_id SecurityhubInsight#resource_aws_s3_bucket_owner_id}
     */
    readonly resourceAwsS3BucketOwnerId?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[];
    /**
     * resource_aws_s3_bucket_owner_name block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_s3_bucket_owner_name SecurityhubInsight#resource_aws_s3_bucket_owner_name}
     */
    readonly resourceAwsS3BucketOwnerName?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[];
    /**
     * resource_container_image_id block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_container_image_id SecurityhubInsight#resource_container_image_id}
     */
    readonly resourceContainerImageId?: SecurityhubInsightFiltersResourceContainerImageId[];
    /**
     * resource_container_image_name block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_container_image_name SecurityhubInsight#resource_container_image_name}
     */
    readonly resourceContainerImageName?: SecurityhubInsightFiltersResourceContainerImageName[];
    /**
     * resource_container_launched_at block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_container_launched_at SecurityhubInsight#resource_container_launched_at}
     */
    readonly resourceContainerLaunchedAt?: SecurityhubInsightFiltersResourceContainerLaunchedAt[];
    /**
     * resource_container_name block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_container_name SecurityhubInsight#resource_container_name}
     */
    readonly resourceContainerName?: SecurityhubInsightFiltersResourceContainerName[];
    /**
     * resource_details_other block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_details_other SecurityhubInsight#resource_details_other}
     */
    readonly resourceDetailsOther?: SecurityhubInsightFiltersResourceDetailsOther[];
    /**
     * resource_id block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_id SecurityhubInsight#resource_id}
     */
    readonly resourceId?: SecurityhubInsightFiltersResourceId[];
    /**
     * resource_partition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_partition SecurityhubInsight#resource_partition}
     */
    readonly resourcePartition?: SecurityhubInsightFiltersResourcePartition[];
    /**
     * resource_region block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_region SecurityhubInsight#resource_region}
     */
    readonly resourceRegion?: SecurityhubInsightFiltersResourceRegion[];
    /**
     * resource_tags block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_tags SecurityhubInsight#resource_tags}
     */
    readonly resourceTags?: SecurityhubInsightFiltersResourceTags[];
    /**
     * resource_type block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_type SecurityhubInsight#resource_type}
     */
    readonly resourceType?: SecurityhubInsightFiltersResourceType[];
    /**
     * severity_label block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#severity_label SecurityhubInsight#severity_label}
     */
    readonly severityLabel?: SecurityhubInsightFiltersSeverityLabel[];
    /**
     * source_url block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#source_url SecurityhubInsight#source_url}
     */
    readonly sourceUrl?: SecurityhubInsightFiltersSourceUrl[];
    /**
     * threat_intel_indicator_category block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_category SecurityhubInsight#threat_intel_indicator_category}
     */
    readonly threatIntelIndicatorCategory?: SecurityhubInsightFiltersThreatIntelIndicatorCategory[];
    /**
     * threat_intel_indicator_last_observed_at block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_last_observed_at SecurityhubInsight#threat_intel_indicator_last_observed_at}
     */
    readonly threatIntelIndicatorLastObservedAt?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[];
    /**
     * threat_intel_indicator_source block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_source SecurityhubInsight#threat_intel_indicator_source}
     */
    readonly threatIntelIndicatorSource?: SecurityhubInsightFiltersThreatIntelIndicatorSource[];
    /**
     * threat_intel_indicator_source_url block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_source_url SecurityhubInsight#threat_intel_indicator_source_url}
     */
    readonly threatIntelIndicatorSourceUrl?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[];
    /**
     * threat_intel_indicator_type block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_type SecurityhubInsight#threat_intel_indicator_type}
     */
    readonly threatIntelIndicatorType?: SecurityhubInsightFiltersThreatIntelIndicatorType[];
    /**
     * threat_intel_indicator_value block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_value SecurityhubInsight#threat_intel_indicator_value}
     */
    readonly threatIntelIndicatorValue?: SecurityhubInsightFiltersThreatIntelIndicatorValue[];
    /**
     * title block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#title SecurityhubInsight#title}
     */
    readonly title?: SecurityhubInsightFiltersTitle[];
    /**
     * type block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#type SecurityhubInsight#type}
     */
    readonly type?: SecurityhubInsightFiltersType[];
    /**
     * updated_at block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#updated_at SecurityhubInsight#updated_at}
     */
    readonly updatedAt?: SecurityhubInsightFiltersUpdatedAt[];
    /**
     * user_defined_values block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#user_defined_values SecurityhubInsight#user_defined_values}
     */
    readonly userDefinedValues?: SecurityhubInsightFiltersUserDefinedValues[];
    /**
     * verification_state block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#verification_state SecurityhubInsight#verification_state}
     */
    readonly verificationState?: SecurityhubInsightFiltersVerificationState[];
    /**
     * workflow_status block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#workflow_status SecurityhubInsight#workflow_status}
     */
    readonly workflowStatus?: SecurityhubInsightFiltersWorkflowStatus[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html aws_securityhub_insight}.
 */
export declare class SecurityhubInsight extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html aws_securityhub_insight} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SecurityhubInsightConfig);
    get arn(): string;
    private _groupByAttribute;
    get groupByAttribute(): string;
    set groupByAttribute(value: string);
    get groupByAttributeInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _filters;
    get filters(): SecurityhubInsightFilters[];
    set filters(value: SecurityhubInsightFilters[]);
    get filtersInput(): SecurityhubInsightFilters[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
