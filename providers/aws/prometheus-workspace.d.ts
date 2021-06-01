import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PrometheusWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_workspace.html#alias PrometheusWorkspace#alias}.
     */
    readonly alias?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/prometheus_workspace.html aws_prometheus_workspace}.
 */
export declare class PrometheusWorkspace extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/prometheus_workspace.html aws_prometheus_workspace} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: PrometheusWorkspaceConfig);
    private _alias?;
    get alias(): string;
    set alias(value: string);
    resetAlias(): void;
    get aliasInput(): string | undefined;
    get arn(): string;
    get id(): string;
    get prometheusEndpoint(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
